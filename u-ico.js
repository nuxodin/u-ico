document.fonts.ready.then(()=>{
    document.documentElement.classList.add('u-ico-ready');
    customElements.define('u-ico', uIco);
});
document.documentElement.classList.add('u-ico-js');

const uIco = class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let failed;
        if (this.firstChild) {
            const range = new Range();
            range.selectNode(this.firstChild);
            const box = range.getBoundingClientRect();
            failed = box.width > box.height*2 || box.width < box.height/2;
        }
        if (failed) {
            const computed = getComputedStyle(this);
            this.setAttribute('failed','');
            console.warn('icon (u-ico) failed? Or element to small, text:'+this.textContent+' font:'+computed.fontFamily);
            console.log(this)
        }

        if (uIco_report) {
            if (uIco_report===true) uIco_report = Object.create(null);
            const computed = getComputedStyle(this);
            const computedAfter = getComputedStyle(this, 'after');
            const text = this.firstChild?.textContent ?? computedAfter.content;
            uIco_report[computed.fontFamily] ??= Object.create(null);
            uIco_report[computed.fontFamily][text] = failed ? 'failed' : 'ok';
        }
    }
}

window.uIco_report = true;

document.fonts.ready.then(()=>{
    setTimeout(()=>{
        if (!uIco_report) return;
        console.log('u-ico icons used', uIco_report);
    },2000)
});
