var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                if(note.trim()){
                    var item = {timestamp: Date.now(), text: note};
                    list.push(item);
                    return true;
                }
            }
            return false;
        },
        remove: function(index) {
            if(index && (list.length >= index)){
                list.splice(index, 1);
                return true;
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        find: function(str) {
            function findItem(item) {
                return item.text === str;
            }
            if(list.find(findItem) === undefined){
                return false;
            }
            return list.find(findItem);
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());