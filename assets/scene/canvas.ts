import { _decorator, Button, Component, Event, EventHandler, Intersection2D, Node, PolygonCollider2D, UITransform, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('canvas')
export class canvas extends Component {
    callback(event: Event, customEventData: string) {
        // const node = event.target as Node;
        // const position = node.position;
        // const uiTransform = this.node.getComponent(UITransform);
        // const local = uiTransform.convertToNodeSpaceAR(position);
        // const bHit = Intersection2D.pointInPolygon(local, position);
        // const button = node.getComponent(Button);
    }

    start(): void {
        console.log('加载中.....');
        const clickEventHandler = new EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = 'canvas';
        clickEventHandler.handler = 'callback';
        clickEventHandler.customEventData = 'foobar';

        const button = this.node.getComponent(Button);
        console.log(button);
        button.clickEvents.push(clickEventHandler);
    }
}


