describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });
    it("should be able to count notes", function () {
        expect(notes.count()).toBe(5);
    });
    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });
    it("should ignore blank notes", function () {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should ignore notes containing only whitespace', function() {
        expect(notes.add('   ')).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should require a string parameter', function() {
        expect(notes.add()).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should be able to remove a note with index', function() {
        expect(notes.remove(3)).toBe(true);
        expect(notes.count()).toBe(4);
    });
    it('should not be able to remove a note with index greater than list length', function() {
        expect(notes.remove(10)).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should require a index parameter', function() {
        expect(notes.remove()).toBe(false);
        expect(notes.count()).toBe(5);
    });
    it('should find "item" object from list with note', function() {
        var item = {timestamp: Date.now(), text: 'first note'};
        expect(notes.find('first note')).toEqual(item);
    });
    it('should not return undefined if list does not contain note', function() {
        expect(notes.find('seventh note')).toBe(false);
    });
});
