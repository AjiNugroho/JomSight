import type { ChartData, ChartArea } from 'chart.js';
interface colorsGradient{
    start:string;
    mid?:string;
    end:string;
}
export const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea, colors:colorsGradient)=> {
    const colorStart = colors.start
    const colorMid = colors.mid || 'transparent'
    const colorEnd = colors.end
  
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(0.5, colorMid);
    gradient.addColorStop(1, colorEnd);
  
    return gradient;
  }

