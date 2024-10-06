export { default as Accordionmission } from '../../components/Accordionmission.vue'
export { default as Accordionservices } from '../../components/Accordionservices.vue'
export { default as ClientLogo } from '../../components/ClientLogo.vue'
export { default as Contentcard } from '../../components/Contentcard.vue'
export { default as Contentcard2 } from '../../components/Contentcard2.vue'
export { default as DesignContent } from '../../components/DesignContent.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Label } from '../../components/Label.vue'
export { default as Members } from '../../components/Members.vue'
export { default as Membersgrid } from '../../components/Membersgrid.vue'
export { default as Minititle } from '../../components/Minititle.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as NavButton } from '../../components/NavButton.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Projectcard } from '../../components/Projectcard.vue'
export { default as Servicecard } from '../../components/Servicecard.vue'
export { default as Technologyuse } from '../../components/Technologyuse.vue'
export { default as Title } from '../../components/Title.vue'
export { default as TitleContainer } from '../../components/TitleContainer.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
