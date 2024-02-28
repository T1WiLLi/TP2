export function qs(selected:string) : Element | null {
    return document.querySelector(selected);
}

export function qsAll(selected:string) : NodeListOf<Element> {
    return document.querySelectorAll(selected);
}