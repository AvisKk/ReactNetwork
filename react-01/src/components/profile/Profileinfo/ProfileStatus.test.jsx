import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'Status'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Status');
    });
    test("after creation span with correct status should be displayed ", () => {
        const component = create(<ProfileStatus status={'Status'}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("after creation span with correct status should be displayed ", () => {
        const component = create(<ProfileStatus status={'Status'}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe('Status');
    });
    test("after creation input should not be displayed ", () => {
        const component = create(<ProfileStatus status={'Status'}/>);
        const root = component.root;
        expect(()=> {root.findByType("input")
        }).toThrow();
    });
    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status={'Status'}/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe('Status');
    });
});