var assert = chai.assert;

describe('TodoModel constructor', function() {
    it('should create the model with the correct key', function() {
        var model = new app.TodoModel('Adele');
        assert.equal(model.key, 'Adele');
    });
});

describe('TodoModel#addTodo', function() {
    it('should add a new todo', function() {
        var model = new app.TodoModel('Beyonce');
        model.addTodo('Perform at Superbowl');
        assert.equal(model.todos.length, 1);
        assert.equal(model.todos[0].title, 'Perform at Superbowl');
        assert.equal(model.todos[0].completed, false);
    });
});

describe('TodoModel#toggle', function() {
    it('should toggle the completed state', function() {
        var model = new app.TodoModel('Charlie');
        model.addTodo('Plan a performance');
        model.addTodo('Call some friends');
        assert.equal(model.todos.length, 2);
        model.toggle(model.todos[0]);
        assert.equal(model.todos[0].completed, true);
    });
});

describe('TodoModel#toggleAll', function() {
    it('should toggle the completed state of every todo', function() {
        var model = new app.TodoModel('Drake');
        model.addTodo('Finish homework');
        model.addTodo('Clean up');
        assert.equal(model.todos.length, 2);
        model.toggleAll(true);
        assert.equal(model.todos[0].completed, true);
        assert.equal(model.todos[1].completed, true);
    });
});

describe('TodoModel#destroy', function() {
    it('should remove the specified todo', function() {
        var model = new app.TodoModel('Eddie');
        model.addTodo('Make another movie');
        assert.equal(model.todos.length, 1);
        model.destroy(model.todos[0]);
        assert.equal(model.todos.length, 0);
    });
});

describe('app.Utils.uuid()', function() {
    it('should return a 36-character string', function() {
        chai.expect(app.Utils.uuid().length).to.equal(36);
    });
});
