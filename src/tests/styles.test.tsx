import { theme } from "../themes";
import { calcRem, getButtonFontSizeBySize, getButtonPaddingBySize, getIconSize } from "../utils/styles";

describe('calcrem function', () => {
  it('should return 0 when a minus value is provided', () => {
    expect(calcRem(-2)).toEqual('0rem');
  })

  it('should return string based on provided size', () => {
    expect(calcRem(14)).toEqual('0.875rem');
    expect(calcRem(16)).toEqual('1rem');
    expect(calcRem(32)).toEqual('2rem');
  })
})


describe('getIconSize function', () => {

  it('should return default size if size is not provided', () => {
    expect(getIconSize(theme)).toEqual('1.5rem');
  });

  it('should return size based on the provided size', () => {
    expect(getIconSize(theme, 'xxSmall')).toEqual('0.875rem');
    expect(getIconSize(theme, 'xSmall')).toEqual('1rem');
    expect(getIconSize(theme, 'small')).toEqual('1.25rem');
    expect(getIconSize(theme, 'medium')).toEqual('1.5rem');
    expect(getIconSize(theme, 'large')).toEqual('2rem');
    expect(getIconSize(theme, 'xLarge')).toEqual('2.25rem');
    expect(getIconSize(theme, 'xxLarge')).toEqual('3.75rem');
  });
});

describe('getButtonFontSizeBySize function', () => {

  it('should return default size if size is not provided', () => {
    expect(getButtonFontSizeBySize(theme)).toEqual('14px');
  });

  it('should return size based on the provided size', () => {
    expect(getButtonFontSizeBySize(theme, 'small')).toEqual('12px');
    expect(getButtonFontSizeBySize(theme, 'medium')).toEqual('14px');
    expect(getButtonFontSizeBySize(theme, 'large')).toEqual('16px');
    expect(getButtonFontSizeBySize(theme, 'xLarge')).toEqual('18px');
  });
});

describe('getButtonPaddingBySize function', () => {

  it('should return default size if size is not provided', () => {
    expect(getButtonPaddingBySize(theme)).toEqual('8px 16px');
  });

  it('should return size based on the provided size', () => {
    expect(getButtonPaddingBySize(theme, 'small')).toEqual('8px 8px');
    expect(getButtonPaddingBySize(theme, 'medium')).toEqual('8px 16px');
    expect(getButtonPaddingBySize(theme, 'large')).toEqual('8px 48px');
    expect(getButtonPaddingBySize(theme, 'xLarge')).toEqual('8px 56px');
  });
});
