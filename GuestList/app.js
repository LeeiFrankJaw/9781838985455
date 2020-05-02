var vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            date: 'August 14th - 16th',
            title: 'Summer Festival!',
            signUpText: 'Add your name to the guest list for <em>eclusive</em> offers:',
            description: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            capacity: 25,
        },
        newNameText: '',
        guestNames: []
    },
    methods: {
        formSubmitted: function() {
            console.log(vm2.appName);
            if (this.newNameText.length > 0
                && this.guestNames.length < this.event.capacity) {
                this.guestNames.push(this.newNameText);
                this.newNameText = '';
            }
        },
        keyPressed: function() {
            console.log('key pressed');
        }
    },
    computed: {
        sortedNames: function() {
            console.log('computed');
            return this.guestNames.sort();
        }
    },
    watch: {
        guestNames: function(data) {
            console.log('Watch triggered');
        }
    },
    filters: {
        formatName: function(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
        }
    },
    beforeCreate: function() {
        console.log('beforeCreate');
    },
    created: function() {
        console.log('created');
    },
    beforeMount: function() {
        console.log('beforeMount');
    },
    mounted: function() {
        console.log('mounted');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate');
    },
    updated: function() {
        console.log('updated');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy');
    },
    destroyed: function() {
        console.log('destroyed');
    }
});

var vm2 = new Vue({
    el: '#navigation',
    data: {
        appName: 'Guest List',
        navLinks: [
            {name: 'Home', id: 1, url: 'https://www.google.com/'},
            {name: 'Upcoming events', id: 2, url: 'https://www.amazon.com/'},
            {name: 'Guest Benefits', id: 3, url: 'https://www.taobao.com/'},
            {name: 'Latest News', id: 4, url: 'https://www.youtube.com/'}
        ]
    },
    methods: {
        changeTitle: function() {
            this.$refs.name.style.display = 'none';
            vm1.event.capacity = 15;
        }
    }
});


// var vm3 = new Vue({
//     template: `<div class="col-sm-12 text-center">
//                  <h1>Guest List</h1>
//                </div>`
// });

// vm3.$mount('#navigation');
