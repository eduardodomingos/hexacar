module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'www/css/hexacar.css': 'www/css/hexacar.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                      'www/css/hexacar.css' : 'www/css/hexacar.css'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'www/css/hexacar.min.css': [
                        'www/css/hexacar.css']
                }
            }
        },

        copy: {
            require: {
                expand: true,
                cwd:    'bower_components/requirejs',
                src:    'require.js',
                dest:   'www/js/vendor'
            },

            jquery: {
                expand: true,
                cwd:    'bower_components/jquery/dist',
                src:    'jquery.js',
                dest:   'www/js/vendor'
            },

            // lightslider_js: {
            //     expand: true,
            //     cwd:    'bower_components/lightslider/dist/js',
            //     src:    'lightslider.js',
            //     dest:   'www/js/vendor'
            // }
        },

        watch: {
            scss: {
                files: 'www/css/**/*.scss',
                tasks: ['sass','autoprefixer','cssmin']
            }
        }
    });

    // Load the plugins that provides the tasks.
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['copy','sass','autoprefixer','cssmin','watch']);

};
