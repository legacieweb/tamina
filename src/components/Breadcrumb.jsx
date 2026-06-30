import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { products } from '../data/products'

const routeLabels = {
  '/': 'HOME',
  '/products': 'PRODUCTS',
  '/about': 'ABOUT',
  '/contact': 'CONTACT',
  '/cart': 'SHOPPING BAG',
  '/wishlist': 'WISHLIST',
  '/checkout': 'CHECKOUT',
  '/auth': 'ACCOUNT',
  '/dashboard': 'DASHBOARD',
  '/privacy-policy': 'PRIVACY POLICY',
  '/terms-of-service': 'TERMS OF SERVICE',
  '/shipping-policy': 'SHIPPING POLICY',
  '/refunds-policy': 'REFUNDS POLICY',
  '/store-locator': 'STORE LOCATOR',
  '/new-arrivals': 'NEW ARRIVALS',
  '/best-sellers': 'BEST SELLERS',
  '/gift-sets': 'GIFT SETS',
  '/deals': 'DEALS',
  '/limited-offers': 'LIMITED OFFERS'
}

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  const isDashboardPath = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin')

  if (isDashboardPath || pathnames.length === 0) return null

  const getProductCategory = () => {
    if (location.pathname.startsWith('/product/')) {
      const match = location.pathname.match(/^\/product\/(\d+)/)
      if (match) {
        const productId = parseInt(match[1])
        const product = products.find(p => p.id === productId)
        return product?.category
      }
    }
    return null
  }

  const productCategory = getProductCategory()

  const getLabel = (pathname, value) => {
    if (routeLabels[pathname]) return routeLabels[pathname]
    if (pathname.startsWith('/product/')) return 'PRODUCT DETAILS'
    if (pathname.startsWith('/collections/')) return decodeURIComponent(value).replace(/-/g, ' ').toUpperCase()
    return decodeURIComponent(value).replace(/-/g, ' ').toUpperCase()
  }

  const buildBreadcrumbItems = () => {
    const items = []
    
    if (productCategory) {
      items.push({
        to: `/products?category=${encodeURIComponent(productCategory)}`,
        label: productCategory.toUpperCase(),
        isLast: false
      })
      items.push({
        to: location.pathname,
        label: 'PRODUCT DETAILS',
        isLast: true
      })
    } else {
      pathnames.forEach((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        items.push({
          to,
          label: getLabel(to, value),
          isLast: index === pathnames.length - 1
        })
      })
    }
    
    return items
  }

  const breadcrumbItems = buildBreadcrumbItems()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 sm:top-44 md:top-48 left-4 md:left-12 z-10 flex items-center flex-wrap gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-300 shadow-lg"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-pink-500 transition-colors"
      >
        HOME
      </Link>
      
      {breadcrumbItems.map((item) => (
        <React.Fragment key={item.to}>
          <ChevronRight size={10} className="text-gray-400" />
          {item.isLast ? (
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-500">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.to}
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-pink-500 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  )
}

export default Breadcrumb