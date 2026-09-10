export function getScoreColor(score: number): {
  badgeBg: string;
  badgeText: string;
  ringColor: string;
  fillColor: string;
} {
  if (score >= 90) {
    return {
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      badgeText: 'text-emerald-700',
      ringColor: 'stroke-emerald-600',
      fillColor: 'text-emerald-600'
    };
  }
  if (score >= 80) {
    return {
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-300',
      badgeText: 'text-teal-700',
      ringColor: 'stroke-teal-600',
      fillColor: 'text-teal-600'
    };
  }
  return {
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-300',
    badgeText: 'text-amber-700',
    ringColor: 'stroke-amber-600',
    fillColor: 'text-amber-600'
  };
}

export function getRiskBadge(risk: string): { bg: string; text: string; dot: string } {
  switch (risk.toLowerCase()) {
    case 'low':
      return { bg: 'bg-emerald-100/70', text: 'text-emerald-800', dot: 'bg-emerald-500' };
    case 'medium':
      return { bg: 'bg-amber-100/70', text: 'text-amber-800', dot: 'bg-amber-500' };
    case 'high':
      return { bg: 'bg-rose-100/70', text: 'text-rose-800', dot: 'bg-rose-500' };
    default:
      return { bg: 'bg-stone-100', text: 'text-stone-800', dot: 'bg-stone-400' };
  }
}

export function getProfitBadge(profit: string): { bg: string; text: string } {
  switch (profit.toLowerCase()) {
    case 'very high':
      return { bg: 'bg-emerald-600 text-white', text: 'text-emerald-700' };
    case 'high':
      return { bg: 'bg-emerald-100 text-emerald-800', text: 'text-emerald-700' };
    case 'moderate':
    default:
      return { bg: 'bg-lime-100 text-lime-800', text: 'text-lime-700' };
  }
}
