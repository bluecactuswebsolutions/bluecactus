const Nav = require('../common/nav.vue');
const Foot = require('../common/footer.vue');

module.exports = {
  components: {
    'nav-bar': Nav,
    'foot': Foot
  },
  data: function() {
    return {
      jett: {
        show: true,
        message: 'Hide Details'
      }
    };
  },
  methods: {
    showJett: function() {
      this.jett.show = !this.jett.show;
      if (this.jett.message === 'Show Details') {
        this.jett.message = 'Hide Details'
      } else {
        this.jett.message = 'Show Details'
      }
    }
  }
};
