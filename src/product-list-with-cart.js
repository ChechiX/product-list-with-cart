import { LitElement, html, css } from 'lit';
import { resetStyles } from './styles/reset.styles';

export class ProductListWithCart extends LitElement {
  render() {
    return html`<h1 class="heading">Desserts</h1>`;
  }

  static get styles() {
    return [
      resetStyles,
      css`
        :host {
          display: block;
        }

        .heading {
          color: var(--rose-900);
          margin: 0;
        }
      `,
    ];
  }
}

window.customElements.define('product-list-with-cart', ProductListWithCart);
