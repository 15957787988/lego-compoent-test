(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LegoComponents = {}, global.Vue, global._));
})(this, (function (exports, vue, lodashEs) { 'use strict';

  // the common default props, all the components should have these props
  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '318px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: 1,
      // position and x,y
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0'
  };
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  const imageDefaultProps = {
      imageSrc: '',
      ...commonDefaultProps
  };
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  // this contains all default props for all the components
  // useful for inserting new component into the store
  const componentsDefaultProps = {
      'l-text': {
          props: textDefaultProps
      },
      'l-image': {
          props: imageDefaultProps
      },
      'l-shape': {
          props: shapeDefaultProps
      }
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const transformToComponentProps = (props, extraProps) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item
          };
      });
      if (extraProps) {
          return { ...mapProps, ...extraProps };
      }
      else {
          return mapProps;
      }
  };

  const defaultStyles = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  const useStylePick = (props, pickStyles = defaultStyles) => {
      return vue.computed(() => lodashEs.pick(props, pickStyles));
  };

  const useComponentClick = (props) => {
      const handleClick = () => {
          if (props.actionType && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return handleClick;
  };

  const extraProps = {
      tag: {
          type: String,
          default: 'p'
      },
      ...isEditingProp
  };
  const defaultProps$1 = transformToComponentProps(componentsDefaultProps['l-text'].props, extraProps);
  // array that contains style props
  var script$3 = vue.defineComponent({
      name: 'l-text',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          const styleProps = useStylePick(props);
          const handleClick = useComponentClick(props);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      onClick: vue.withModifiers(_ctx.handleClick, ["prevent"]),
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-text-component"
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick", "style"]))
  }

  script$3.render = render$3;
  script$3.__scopeId = "data-v-6bf95b7a";
  script$3.__file = "src/components/LText/LText.vue";

  script$3.install = (app) => {
      app.component(script$3.name, script$3);
  };

  // array that contains style props
  var script$2 = vue.defineComponent({
      name: 'l-image',
      props: transformToComponentProps(componentsDefaultProps['l-image'].props, isEditingProp),
      setup(props) {
          const styleProps = useStylePick(props);
          const handleClick = useComponentClick(props);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _hoisted_1$1 = ["src"];

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("img", {
      src: _ctx.imageSrc,
      style: vue.normalizeStyle(_ctx.styleProps),
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      class: "l-image-component",
      draggable: false
    }, null, 12 /* STYLE, PROPS */, _hoisted_1$1))
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-1e970aa2";
  script$2.__file = "src/components/LImage/LImage.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  const defaultProps = transformToComponentProps(componentsDefaultProps['l-shape'].props, isEditingProp);
  // array that contains style props
  var script$1 = vue.defineComponent({
      name: 'l-shape',
      props: {
          ...defaultProps
      },
      setup(props) {
          const styleProps = useStylePick(props);
          const handleClick = useComponentClick(props);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-shape-component",
      draggable: false
    }, null, 4 /* STYLE */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/LShape/LShape.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  var script = vue.defineComponent({
      name: 'final-page',
      props: {
          page: {
              type: Object
          },
          components: {
              type: Array,
              required: true
          }
      }
  });

  const _hoisted_1 = ["id"];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: "final-page",
      style: vue.normalizeStyle(_ctx.page && _ctx.page.props)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.components, (item) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          key: item.id,
          id: `component-${item.id}`
        }, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.name), vue.normalizeProps(vue.guardReactiveProps(item.props)), null, 16 /* FULL_PROPS */))
        ], 8 /* PROPS */, _hoisted_1))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "src/components/FinalPage/FinalPage.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$3,
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      components.map(component => {
          app.use(component);
      });
  };
  var index = {
      install
  };

  exports.FinalPage = script;
  exports.LImage = script$2;
  exports.LShape = script$1;
  exports.LText = script$3;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
