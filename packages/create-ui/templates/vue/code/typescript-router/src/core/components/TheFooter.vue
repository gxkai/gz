<script setup lang="ts">
import { toggleDark } from '~/core/hooks'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </RouterLink>

    <button
      class="icon-btn mx-2 !outline-none"
      data-test-id="theme-toggler"
      :title="t('button.toggle_dark')"
      @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a
      class="icon-btn mx-2"
      data-test-id="language-selector"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <div i-carbon-language />
    </a>

    <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/FranciscoKloganB/vitesse-enterprise"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
