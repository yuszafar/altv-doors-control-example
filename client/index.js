import * as alt from 'alt';
import * as native from 'natives';
import {DOORS} from "./data";

const localPlayer = alt.Player.local



alt.on('resourceStart', (error) => {
    DOORS.forEach((door) => {
        native.addDoorToSystem(door.id, door.model, door.pos.x, door.pos.y, door.pos.z, false, false, false);
        native.doorSystemSetDoorState(door.id, door.state, false, false);
    })
});

alt.on('keyup', (key) => {
    if (key == 'L'.charCodeAt(0)) {
        DOORS.forEach((door) => {
            const dist = native.getDistanceBetweenCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, door.pos.x, door.pos.y, door.pos.z, false);
            if (dist < 1) {
                if (door.state == 1) {
                    native.doorSystemSetDoorState(door.id, 0, false, false);
                    door.state = 0
                } else {
                    native.doorSystemSetDoorState(door.id, 1, false, false);
                    door.state = 1
                }
            }

        });
    }
});