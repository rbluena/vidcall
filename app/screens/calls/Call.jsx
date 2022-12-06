import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import {
  ChannelProfileType,
  createAgoraRtcEngine,
  ClientRoleType,
  RtcSurfaceView,
  RenderModeType,
} from 'react-native-agora';

const token =
  '007eJxTYJjhvtFjhZuS49uVusFJRzdpGWU/tFeqeq3PG9549o2s30sFBuNkY8tUC2MziyRTSxMT8yQLC8s0C/NUM6MkQwvjFGMDw1t9yQ2BjAx7bicxMTJAIIjPxuBQlJiUmcnAAAAjhh71';
const appId = '3c39e8368b59447b889f87e62b183d30';

const agoraEng = createAgoraRtcEngine();

agoraEng.initialize({
  appId,
  channelProfile: ChannelProfileType.ChannelProfileCommunication,
});

// let uid = 0;

const Call = ({ channel = '@rabii', currentUser = {} }) => {
  const agoraEngineRef = useRef(null);
  const [peerIds, setPeerIds] = useState([]);
  const [isLocalVideoMuted, setIsLocalVideMuted] = useState(false);
  const [muteLocalAudio, setMuteLocalAudio] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [remoteUID, setRemoteUID] = useState(null);

  const leaveCall = () => {
    try {
      agoraEng.leaveChannel();
    } catch (e) {}
  };

  const initiateCall = async () => {};

  const toggleMuteVideo = () => {
    setIsLocalVideMuted(isMuted => {
      if (isMuted === true) {
        agoraEng.enableLocalVideo(false);
        return false;
      }

      agoraEng.enableLocalVideo(true);
      return true;
    });
  };

  const toggleMuteAudio = () => {
    agoraEng.muteLocalAudioStream(true);
  };

  const joinCall = async () => {
    try {
      agoraEng.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );
      agoraEng.startPreview();
      agoraEng.joinChannel(token, channel, 16, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
    } catch (error) {
      console.log(`Join error, ${error}`);
    }
  };

  const initialize = async () => {
    try {
      agoraEng.registerEventHandler({
        onJoinChannelSuccess() {
          setIsJoined(true);
        },
        onLeaveChannel() {
          setPeerIds([]);
          setIsJoined(false);
        },
        onUserJoined(_connection, _uid) {
          setPeerIds(state => [...state, _uid]);
        },
        onUserOffline(_connection, _uid, _reason) {
          setPeerIds(state => state.filter(item => item !== _uid));
        },
        onError(err, _message) {
          console.log(`Error message ${_message}`);
        },
      });

      agoraEng.enableVideo();
      agoraEng.enableAudio();
    } catch (error) {
      console.log(` Connecting error: ${error}`);
    }
  };

  useEffect(() => {
    initialize();

    return () => agoraEng.release();
  }, []);

  return (
    <View style={styles.container}>
      {isJoined && !isLocalVideoMuted ? (
        <RtcSurfaceView canvas={{ uid: 0 }} style={{ flex: 1 }} />
      ) : null}

      <View style={styles.participantsContainer}>
        {isJoined && peerIds?.length > 0
          ? peerIds.map(uid => (
              <RtcSurfaceView
                key={uid}
                canvas={{ uid, renderMode: RenderModeType.RenderModeHidden }}
                connection={{
                  channelId: channel,
                  localUid: uid,
                }}
                zOrderMediaOverlay
                zOrderOnTop
              />
            ))
          : null}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 28,
        }}>
        <Pressable onPress={joinCall}>
          <Text style={{ padding: 24 }}>Join</Text>
        </Pressable>

        {isJoined && (
          <Pressable onPress={toggleMuteVideo}>
            <Text style={{ padding: 24 }}>
              {isLocalVideoMuted ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        )}

        <Pressable onPress={leaveCall}>
          <Text style={{ padding: 24 }}>Leave</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Call;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  participantsContainer: {
    position: 'absolute',
    zIndex: 5,
    left: 0,
    right: 0,
    bottom: 72,
    flexDirection: 'row',
    marginVertical: 2,
  },

  participant: {
    width: 100,
    height: 100,
  },
});
