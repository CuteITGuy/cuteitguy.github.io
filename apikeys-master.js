;

(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip({
      placement: 'top',
    });

    const shownDataName = '__shown__';
    $actionLinks = $('.apikey-actions-cell a');
    const actionPopoverTemplate = `
    <div class="popover apikey-action-popover" role="tooltip">
      <div class="arrow"></div>
      <div>
        <div class="apikey-action action-duplicate">
          <form action="/apikeys/duplicate" method="POST">
            <input type="hidden" name="exchangeId" value="0">
            <button type="submit">Duplicate</button>
          </form>
        </div>
        <div class="apikey-action action-delete">
          <form action="/apikeys/delete" method="POST">
            <input type="hidden" name="exchangeId" value="0">
            <button type="submit">Delete</button>
          </form>
        </div>
        <div class="apikey-action action-edit">
          <form action="/apikeys/edit" method="GET">
            <input type="hidden" name="exchangeId" value="0">
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    </div>`;

    $actionLinks.popover({
      container: 'body',
      placement: 'bottom',
      trigger: 'manual',
      title: 'Actions',
      content: 'actions',
      html: true,
      template: actionPopoverTemplate,
      animation: true,
    });

    $actionLinks.click(function (event) {
      const $this = $(this);
      const shown = !!$this.attr(shownDataName);

      $actionLinks.popover('hide');

      if (!shown) {
        $this.popover('show')
      }
    })

    $actionLinks.on('shown.bs.popover', function (event) {
      const $this = $(this);
      const apiKeyId = $this.data('apikey-id');

      $this.attr(shownDataName, '1');
      setApiKeyId(apiKeyId);
    });

    $actionLinks.on('hidden.bs.popover', function (event) {
      const $this = $(this);
      $this.removeAttr(shownDataName);
    });


    function setApiKeyId(apiKeyId) {
      $('input[name="exchangeId"]').val(apiKeyId);
    }
  });
})();
