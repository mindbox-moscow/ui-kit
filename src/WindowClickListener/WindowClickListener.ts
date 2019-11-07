import "./WindowClickListener.scss";

type Handler = () => void;

export const IsntNeutralZoneMarker: string = "kit-overflow-isnt-neutral-zone-marker";

export const WindowClickListener = function (handler: Handler, ...excludingTargetElements: HTMLElement[]) {

    const fromIsntNeutralZoneEvent = (event: Event) => {
        const isClickInsideNotNeutralZone = event.composedPath().some(
            pathEvent => {
                const element = (pathEvent as HTMLElement);
                return element.classList == null
                    ? false
                    : element
                        .classList
                        .contains(IsntNeutralZoneMarker);
            }
        );
        return isClickInsideNotNeutralZone;
    }

    const fromExcludingTargetElementsEvent = (event: Event) => {
        if (excludingTargetElements == null) {
            return false;
        }
        const targetElement = event.target as HTMLElement;

        return excludingTargetElements.some(
            exludingElement => exludingElement.contains(targetElement)
        );
    }

    const clickOnWindow = (event: Event) => {
        if (
            event.isTrusted
            && !fromIsntNeutralZoneEvent(event)
            && !fromExcludingTargetElementsEvent(event)
        ) {
            handler();
        }
    }

    setTimeout(() => window.addEventListener("click", clickOnWindow));

    return {
        stop: function () {
            window.removeEventListener("click", clickOnWindow);
        }
    }
}