;

(() => {
  $(() => {
    const $exchangeMarkets = $('#exchange-markets');
    const $exchangeMarket = $('.exchange-market');

    $exchangeMarkets.owlCarousel({
      loop: false,
      rewind: true,
      margin: 80,
      nav: false,
      autoWidth: true,
    });

    $exchangeMarket.click(function ($event) {
      const $this = $(this);
      const exchangeName = $this.data('exchange-name');
      const exchangeId = $this.data('exchange-id');
      const linkHowto = $this.data('link-howto');

      $exchangeMarket.removeClass('active');
      $this.addClass('active');

      setExchangeName(exchangeName);
      setExchangeId(exchangeId);
      setLinkHowto(exchangeName, linkHowto)
    });
  });


  function setExchangeName(exchangeName) {
    $('#lbKey').text(`${exchangeName} API Key`);
    $('#lbSecret').text(`${exchangeName} API Secret`);
    $('#inpKey').attr('placeholder', `Your ${exchangeName} API Key`);
    $('#inpSecret').attr('placeholder', `Your ${exchangeName} API Key Secret`);
  }


  function setExchangeId(exchangeId) {
    $('#inpExchangeId').val(exchangeId.toString());
  }


  function setLinkHowto(exchangeName, linkHowto) {
    $('#lnkHowTo').attr('href', linkHowto.toString()).text(`How to get your API key and API secret from ${exchangeName}`);
  }
})();
