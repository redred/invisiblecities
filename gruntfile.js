module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    comments: {
      banner: '/**\n' +
        ' * <%= pkg.name %> - <%= pkg.description %>\n' +
        ' *\n' +
        ' * @author <%= pkg.author.name %> - <%= pkg.author.url %>\n' +
        ' * @see <%= pkg.homepage %>\n' +
        ' * @version <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +
        ' */\n',
      footer: '\n;'
    },
    paths: {
      coffee_modules: 'webroot/js/coffee',
      less_modules: 'webroot/css/less',
      js_output: 'webroot/js/compiled',
      css_output: 'webroot/css/compiled'
    },
    coffee: {
      options: {
        bare: true
      },
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: '<%= paths.coffee_modules %>',
        src: ['**/*.coffee'],
        dest: '<%= paths.js_output %>',
        ext: '.js'
      }
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          '<%= paths.css_output %>/style.css': '<%= paths.less_modules %>/style.less'
        }
      }
    },
    watch: {
      scripts: {
        files: [
          '<%= paths.coffee_modules %>/*',
          '<%= paths.less_modules %>/*'
        ],
        tasks: ['coffee', 'less']
      }
    }
  });

  // grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Tasks
  grunt.registerTask('default', ['coffee', 'less', 'watch']);

};