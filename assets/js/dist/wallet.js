var Wallet = {
  seedLimit : 0,
  init : function() {
    this.setDefaults()
    this.listeners()
    this.walletListeners()
  },
  setDefaults : function() {
    this.seedLimit = ninja.seeder.seedLimit
    $('#mousemovelimit').text(this.seedLimit)
  },
  listeners : function() {
  },
  walletListeners : function() {
    $('body').on('single_wallet_generated', function(e) {
      if ($('#exampleprivkey').length && e.detail.privateKeyWif) {
        $('#exampleprivkey').text(e.detail.privateKeyWif)
      }
    })

    $('body').on('wallet_view_details', function(e) {
      $('#detailarea .label').animate({
        opacity: 1
      })
    })
  }
}

Wallet.init();
