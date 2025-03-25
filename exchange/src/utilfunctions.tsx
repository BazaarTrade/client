export function truncateToTwoDecimals(num: number) {
    const str = num.toString();
    const decimalIndex = str.indexOf('.');
    
    if (decimalIndex === -1) {
      return str; 
    }
    
    const truncated = str.substring(0, decimalIndex + 3);
    
    return parseFloat(truncated).toString();
  }

export function formatTotal(total: number): string {
    if (total >= 1_000_000) {
      return truncateToTwoDecimals(total / 1_000_000) + 'M';
    } else if (total >= 1_000) {
      return truncateToTwoDecimals(total / 1_000) + 'K';
    } else {
      return truncateToTwoDecimals(total);
    }
  }
  
export function formatPrice(price: string): string {
    return parseFloat(price).toFixed(1);
  }
