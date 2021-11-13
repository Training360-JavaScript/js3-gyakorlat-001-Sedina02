'use strict';

const HU = {
    date(date) {
        return new  Intl.DateTimeFormat('hu-HU').format(date)
    },

    currency(number) {
        return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(number);
    },

    list(stringArr) {
        return new Intl.ListFormat('hu-HU', { style:'long', type:'conjunction' }).format(stringArr)
    },
};

export default HU