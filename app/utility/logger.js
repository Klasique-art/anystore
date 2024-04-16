import Bugsnag from '@bugsnag/react-native';

const start = () => Bugsnag.start({
    apiKey: 'e4dff12e0f9ae3b109b44d5a126b44db'
});

const log = (error) => Bugsnag.notify(error);


export default {
    start,
    log
}