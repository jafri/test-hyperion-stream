const HyperionSocketClient = require('@eosrio/hyperion-stream-client').default;
const fetch = require('cross-fetch');

const client = new HyperionSocketClient('https://proton.pink.gg', {
  async: false,
  fetch,
});

client.onConnect = () => {
  client.streamActions({
    contract: 'eosio',
    action: 'voteproducer',
    account: '',
    start_from: '2021-12-15T00:00:00.000Z',
    read_until: 0,
    filters: [],
  });
};

// see 3 for handling data
client.onData = async (data, ack) => {
  console.log(data); // process incoming data, replace with your code
  ack(); // ACK when done
};

client.connect(() => {
  console.log('connected!');
});
