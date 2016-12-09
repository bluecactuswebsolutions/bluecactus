// common controller
module.exports = {
  data: function() {
    return {
      home : false,
      portfolio: false,
      contact: false
    }
  },
  created: function() {
    let self = this;
    setTimeout(function() {
      let route = self.$route.name;
      if (route === 'home') {
        self.home = true;
        self.portfolio = false;
        self.contact = false;
      } else if (route === 'portfolio') {
        self.portfolio = true;
        self.contact = false;
        self.home = false;
      } else if (route === 'contact') {
        self.contact = true;
        self.home = false;
        self.portfolio = false;
      }
    }, 200);
  },
  methods: {
    goHome: function(e) {
      this.$router.push('/');
    },
    goPortfolio: function(e) {
      this.$router.push('/portfolio');
    },
    goContact: function(e) {
      this.$router.push('/contact');
    }
  }
};
