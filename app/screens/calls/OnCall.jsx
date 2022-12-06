import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

const token =
  '007eJxTYJjhvtFjhZuS49uVusFJRzdpGWU/tFeqeq3PG9549o2s30sFBuNkY8tUC2MziyRTSxMT8yQLC8s0C/NUM6MkQwvjFGMDw1t9yQ2BjAx7bicxMTJAIIjPxuBQlJiUmcnAAAAjhh71';
const appId = '3c39e8368b59447b889f87e62b183d30';
// const channelName = '@rabii';

const App = ({ channel = '@rabii' }) => {
  const [videoCall, setVideoCall] = useState(false);

  const connectionData = {
    appId,
    channel,
    token,
  };

  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => setVideoCall(true)}>Start Call</Text>
    </View>
  );
};

export default App;

// 3c39e8368b59447b889f87e62b183d30
