const styleModule = document.createElement('dom-module');
styleModule.innerHTML = `
  <template>
    <style>
      p {
        font-family: var(--serif-font);
        line-height: 1.5;
      }
      a {
        color: var(--link-color);
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </template>
`;
styleModule.register('style-module');
