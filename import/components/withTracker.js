import { Tracker } from "meteor/tracker";
import { onMount, onDestroy } from "svelte";

export default function withTracker(trackedFn) {
    const computation = Tracker.autorun(trackedFn);

    onDestroy(() => {
        computation.stop();
    });

    return computation;
}
