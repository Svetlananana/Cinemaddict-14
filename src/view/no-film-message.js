import Abstract from './abstract.js';

const  createNoFilmsMessageTemplate = () => {
  return `
  <section class="films-list">
<h2 class="films-list__title">There are no movies in our database</h2>
</section>`;
};

export default class NoFilmsMessage extends Abstract {

  getTemplate() {
    return createNoFilmsMessageTemplate();
  }
}


