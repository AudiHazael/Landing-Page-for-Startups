$(document).ready(function() {
    $('#signup-form').submit(function(e) {
        e.preventDefault();
        $('.error').remove();
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirm_password = $('#confirm_password').val();
        if (name.length < 3) {
            $('#name').after('<span class="error">Name must be at least 3 characters long</span>');
        }
        if (!isValidEmail(email)) {
            $('#email').after('<span class="error">Invalid email format</span>');
        }
        if (password.length < 6) {
            $('#password').after('<span class="error">Password must be at least 6 characters long</span>');
        }
        if (confirm_password != password) {
            $('#confirm_password').after('<span class="error">Passwords do not match</span>');
        }
        if ($('.error').length == 0) {
            this.submit();
        }
    });
});

function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
