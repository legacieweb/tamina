export const categorySizeGuides = {
  "Skincare": {
    anatomy: [
      { l: 'Skin Type', d: 'Determine if your skin is oily, dry, combination, or sensitive.', icon: '01' },
      { l: 'Skin Concerns', d: 'Identify your primary concerns: aging, acne, hyperpigmentation, or dehydration.', icon: '02' },
      { l: 'Application', d: 'Apply to clean, dry skin. Start with small amounts and layer as needed.', icon: '03' }
    ],
    chart: [
      { s: 'Travel Size', c: 'Travel', b: '15ml', w: 'Single Use', h: 'Test Amount' },
      { s: 'Regular Size', c: 'Regular', b: '50ml', w: '1 Month', h: 'Daily Use' },
      { s: 'Large Size', c: 'Large', b: '100ml', w: '2 Months', h: 'Daily Use' }
    ],
    labels: {
      col1: 'Size (ml)',
      col2: 'Duration',
      col3: 'Usage'
    }
  },
  "Makeup": {
    anatomy: [
      { l: 'Skin Tone', d: 'Identify your undertone: warm, cool, or neutral.', icon: '01' },
      { l: 'Finish Preference', d: 'Choose between matte, dewy, or satin finish based on desired look.', icon: '02' },
      { l: 'Application Tools', d: 'Use appropriate brushes or sponges for best results.', icon: '03' }
    ],
    chart: [
      { s: 'Regular', c: 'Regular', b: 'Single Use', w: '1 Month', h: 'Daily' },
      { s: 'Deluxe', c: 'Deluxe', b: 'Travel Size', w: '2 Months', h: 'Daily' }
    ],
    labels: {
      col1: 'Size',
      col2: 'Duration',
      col3: 'Frequency'
    }
  },
  "Haircare": {
    anatomy: [
      { l: 'Hair Type', d: 'Determine if your hair is straight, wavy, curly, or coily.', icon: '01' },
      { l: 'Hair Density', d: 'Consider fine, medium, or thick hair density.', icon: '02' },
      { l: 'Hair Length', d: 'Measure from roots to ends for appropriate product amount.', icon: '03' }
    ],
    chart: [
      { s: 'Small', c: 'Small', b: '100ml', w: '1 Month', h: 'Short Hair' },
      { s: 'Regular', c: 'Regular', b: '200ml', w: '2 Months', h: 'Medium Hair' },
      { s: 'Large', c: 'Large', b: '400ml', w: '3 Months', h: 'Long Hair' }
    ],
    labels: {
      col1: 'Size (ml)',
      col2: 'Duration',
      col3: 'Hair Length'
    }
  },
  "Fragrance": {
    anatomy: [
      { l: 'Scent Profile', d: 'Choose floral, oriental, fresh, or woody based on preference.', icon: '01' },
      { l: 'Concentration', d: 'EDP lasts longer than Eau de Toilette.', icon: '02' },
      { l: 'Application Areas', d: 'Apply to pulse points: wrists, neck, behind ears.', icon: '03' }
    ],
    chart: [
      { s: 'Roll-On', c: 'Roll-On', b: '10ml', w: '1 Month', h: 'Daily Use' },
      { s: 'Travel', c: 'Travel', b: '30ml', w: '2 Months', h: 'Daily Use' },
      { s: 'Regular', c: 'Regular', b: '50ml', w: '3 Months', h: 'Daily Use' },
      { s: 'Large', c: 'Large', b: '100ml', w: '6 Months', h: 'Daily Use' }
    ],
    labels: {
      col1: 'Size (ml)',
      col2: 'Duration',
      col3: 'Usage'
    }
  },
  "Nails": {
    anatomy: [
      { l: 'Nail Type', d: 'Determine if your nails are natural, gel, or acrylic.', icon: '01' },
      { l: 'Occasion', d: 'Choose shades for everyday, party, or professional use.', icon: '02' },
      { l: 'Finish', d: 'Select from glossy, matte, or shimmer finishes.', icon: '03' }
    ],
    chart: [
      { s: 'Single', c: 'Single', b: '12ml', w: '1 Month', h: 'Daily Use' },
      { s: 'Set', c: 'Set', b: 'Multiple', w: 'Ongoing', h: 'Collection' }
    ],
    labels: {
      col1: 'Size (ml)',
      col2: 'Quantity',
      col3: 'Duration'
    }
  },
  "Beauty Tools": {
    anatomy: [
      { l: 'Tool Type', d: 'Identify brush, device, or hand tool for your needs.', icon: '01' },
      { l: 'Frequency', d: 'Determine how often you will use the beauty tool.', icon: '02' },
      { l: 'Care', d: 'Most tools require regular cleaning and maintenance.', icon: '03' }
    ],
    chart: [
      { s: 'Single', c: 'Single', b: 'One Tool', w: 'Ongoing', h: 'Daily Use' },
      { s: 'Set', c: 'Set', b: 'Multiple', w: 'Ongoing', h: 'Complete Kit' }
    ],
    labels: {
      col1: 'Type',
      col2: 'Quantity',
      col3: 'Usage'
    }
  }
};