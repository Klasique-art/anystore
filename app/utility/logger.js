import Bugsnag from '@bugsnag/expo'

const start = () => Bugsnag.start('e4dff12e0f9ae3b109b44d5a126b44db');

const log = (error) => Bugsnag.notify(error);


export default {
    start,
    log
}