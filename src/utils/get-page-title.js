import defaultSettings from '@/settings'

const title = defaultSettings.title || '建行企业财资管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
