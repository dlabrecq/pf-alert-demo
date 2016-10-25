// This import is only for testing module syntax -- not used in this example.
import {default as tmpl} from './pf-icon-tmpl';

// PfIcon Element
export class PfIcon extends HTMLElement {
  // Fires when an instance was inserted into the document.
  attachedCallback() {
    switch (this.getAttribute("type")) {
      case "danger": this._template = this._dangerTemplate; break;
      case "info": this._template = this._infoTemplate; break;
      case "success": this._template = this._successTemplate; break;
      case "warning": this._template = this._warningTemplate; break;
    }
    this.appendChild(document.importNode(this._template.content, true));
  }
  // Fires when an instance of the element is created.
  createdCallback() {
    this._dangerTemplate = doc.querySelector('.pf-icon-danger-template');
    this._infoTemplate = doc.querySelector('.pf-icon-info-template');
    this._successTemplate = doc.querySelector('.pf-icon-success-template');
    this._warningTemplate = doc.querySelector('.pf-icon-warning-template');
    this._template = this.warningTemplate;
  };
}
(function () {
  document.registerElement('pf-icon', PfIcon);
})();