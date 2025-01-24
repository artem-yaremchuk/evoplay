const faqListRef = document.querySelector('.js-faq-list');

const onToggleShowAnswer = event => {
  event.target
    .closest('.js-faq-control-button')
    ?.closest('.js-faq-list-item')
    ?.classList.toggle('active');
};

faqListRef.addEventListener('click', onToggleShowAnswer);
