document.fonts.ready.then(()=>{
    document.documentElement.classList.add('u-ico-ready');
    customElements.define('u-ico', uIco);
});

const uIco = class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const range = new Range();
        range.selectNode(this.firstChild);
        const box = range.getBoundingClientRect();
        if (box.width > this.offsetWidth) {
            const computed = getComputedStyle(this);
            console.warn('icon not loaded? Or i-ico element to small, text:'+this.textContent+' font:'+computed.fontFamily);
            this.setAttribute('failed',true);
            console.log(this)
        }
    }
}
