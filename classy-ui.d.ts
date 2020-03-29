
declare module 'classy-ui' {

  export type TClassname = string & "CLASSNAME";
  export enum Themes {
    
  }
  export type TGroup = 'GROUP'
  export interface IDecorators {
    /**
     * ```css
     * group:hover $token {}
     * ```
     */
    groupHover: IDecorators;
    /**
     * ```css
     * group:focus $token {}
     * ```
     */
    groupFocus: IDecorators;
    /**
     * ```css
     * group:active $token {}
     * ```
     */
    groupActive: IDecorators;
    /**
     * ```css
     * group:first-child $token {}
     * ```
     */
    groupFirstChild: IDecorators;
    /**
     * ```css
     * group:last-child $token {}
     * ```
     */
    groupLastChild: IDecorators;
    /**
     * ```css
     * group:odd-child $token {}
     * ```
     */
    groupOddChild: IDecorators;
    /**
     * ```css
     * group:even-child $token {}
     * ```
     */
    groupEvenChild: IDecorators;
    /**
     * ```css
     * group:focus-within $token {}
     * ```
     */
    groupFocusWithin: IDecorators;
  
    /**
     * ```css
     * $token:hover {}
     * ```
     */
    hover: IDecorators;
  

    /**
     * ```css
     * $token:focus {}
     * ```
     */
    focus: IDecorators;
  

    /**
     * ```css
     * $token:active {}
     * ```
     */
    active: IDecorators;
  

    /**
     * ```css
     * $token:disabled {}
     * ```
     */
    disabled: IDecorators;
  

    /**
     * ```css
     * $token:visited {}
     * ```
     */
    visited: IDecorators;
  

    /**
     * ```css
     * $token:first-child {}
     * ```
     */
    firstChild: IDecorators;
  

    /**
     * ```css
     * $token:last-child {}
     * ```
     */
    lastChild: IDecorators;
  

    /**
     * ```css
     * $token:odd-child {}
     * ```
     */
    oddChild: IDecorators;
  

    /**
     * ```css
     * $token:even-child {}
     * ```
     */
    evenChild: IDecorators;
  

    /**
     * ```css
     * $token:focus-within {}
     * ```
     */
    focusWithin: IDecorators;
  
  }
  export type TCompose = (...args: Array<IDecorators | TGroup | Themes | TClassname | boolean | ''>) => TClassname;
  export type TTokens = { 
    
    
  /**
    * ### box-sizing
Sets how the total width and height of an element is calculated.
[Mozilla Developer Network: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).
    */
    boxSizing: {
      
  /**
   
   
   * ```css
   * .box-sizing-CONTENT_BOX {
   *   box-sizing: content-box;
   * }
   * ```
   */
  readonly CONTENT_BOX: IDecorators;
  

  /**
   
   
   * ```css
   * .box-sizing-BORDER_BOX {
   *   box-sizing: border-box;
   * }
   * ```
   */
  readonly BORDER_BOX: IDecorators;
  
    }
  

    
  /**
    * ### display
The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
[Mozilla Developer Network: display](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
    */
    display: {
      
  /**
   
   
   * ```css
   * .display-BLOCK {
   *   display: block;
   * }
   * ```
   */
  readonly BLOCK: IDecorators;
  

  /**
   
   
   * ```css
   * .display-INLINE_BLOCK {
   *   display: inline-block;
   * }
   * ```
   */
  readonly INLINE_BLOCK: IDecorators;
  

  /**
   
   
   * ```css
   * .display-INLINE {
   *   display: inline;
   * }
   * ```
   */
  readonly INLINE: IDecorators;
  

  /**
   
   
   * ```css
   * .display-INLINE_FLEX {
   *   display: inline-flex;
   * }
   * ```
   */
  readonly INLINE_FLEX: IDecorators;
  

  /**
   
   
   * ```css
   * .display-TABLE {
   *   display: table;
   * }
   * ```
   */
  readonly TABLE: IDecorators;
  

  /**
   
   
   * ```css
   * .display-TABLE_ROW {
   *   display: table-row;
   * }
   * ```
   */
  readonly TABLE_ROW: IDecorators;
  

  /**
   
   
   * ```css
   * .display-TABLE_CELL {
   *   display: table-cell;
   * }
   * ```
   */
  readonly TABLE_CELL: IDecorators;
  

  /**
   
   
   * ```css
   * .display-GRID {
   *   display: grid;
   * }
   * ```
   */
  readonly GRID: IDecorators;
  

  /**
   
   
   * ```css
   * .display-FLEX {
   *   display: flex;
   * }
   * ```
   */
  readonly FLEX: IDecorators;
  

  /**
   
   
   * ```css
   * .display-HIDDEN {
   *   display: none;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  
    }
  

    
  /**
    * ### table-layout
The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.
[Mozilla Developer Network: table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout).
    */
    tableLayout: {
      
  /**
   
   
   * ```css
   * .table-layout-AUTO {
   *   table-layout: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .table-layout-FIXED {
   *   table-layout: fixed;
   * }
   * ```
   */
  readonly FIXED: IDecorators;
  
    }
  

    
  /**
    * ### position
The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
[Mozilla Developer Network: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
    */
    position: {
      
  /**
   
   
   * ```css
   * .position-STATIC {
   *   position: static;
   * }
   * ```
   */
  readonly STATIC: IDecorators;
  

  /**
   
   
   * ```css
   * .position-FIXED {
   *   position: fixed;
   * }
   * ```
   */
  readonly FIXED: IDecorators;
  

  /**
   
   
   * ```css
   * .position-ABSOLUTE {
   *   position: absolute;
   * }
   * ```
   */
  readonly ABSOLUTE: IDecorators;
  

  /**
   
   
   * ```css
   * .position-RELATIVE {
   *   position: relative;
   * }
   * ```
   */
  readonly RELATIVE: IDecorators;
  

  /**
   
   
   * ```css
   * .position-STICKY {
   *   position: sticky;
   * }
   * ```
   */
  readonly STICKY: IDecorators;
  
    }
  

    
  /**
    * ### background-attachment
The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
[Mozilla Developer Network: background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment).
    */
    backgroundAttachment: {
      
  /**
   
   
   * ```css
   * .background-attachment-FIXED {
   *   background-attachment: fixed;
   * }
   * ```
   */
  readonly FIXED: IDecorators;
  

  /**
   
   
   * ```css
   * .background-attachment-LOCAL {
   *   background-attachment: local;
   * }
   * ```
   */
  readonly LOCAL: IDecorators;
  

  /**
   
   
   * ```css
   * .background-attachment-SCROLL {
   *   background-attachment: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### background-color
The background-color CSS property sets the background color of an element.
[Mozilla Developer Network: background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color).
    */
    backgroundColor: {
      
  /**
   
   
   * ```css
   * .background-color-TRANSPARENT {
   *   background-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .background-color-BLACK {
   *   background-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .background-color-WHITE {
   *   background-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .background-color-GRAY_10 {
   *   background-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .background-color-GRAY_20 {
   *   background-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .background-color-GRAY_30 {
   *   background-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .background-color-GRAY_40 {
   *   background-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .background-color-GRAY_50 {
   *   background-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .background-color-GRAY_60 {
   *   background-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .background-color-GRAY_70 {
   *   background-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .background-color-GRAY_80 {
   *   background-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .background-color-GRAY_90 {
   *   background-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .background-color-RED_10 {
   *   background-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .background-color-RED_20 {
   *   background-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .background-color-RED_30 {
   *   background-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .background-color-RED_40 {
   *   background-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .background-color-RED_50 {
   *   background-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .background-color-RED_60 {
   *   background-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .background-color-RED_70 {
   *   background-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .background-color-RED_80 {
   *   background-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .background-color-RED_90 {
   *   background-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_10 {
   *   background-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_20 {
   *   background-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_30 {
   *   background-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_40 {
   *   background-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_50 {
   *   background-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_60 {
   *   background-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_70 {
   *   background-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_80 {
   *   background-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .background-color-ORANGE_90 {
   *   background-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_10 {
   *   background-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_20 {
   *   background-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_30 {
   *   background-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_40 {
   *   background-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_50 {
   *   background-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_60 {
   *   background-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_70 {
   *   background-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_80 {
   *   background-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .background-color-YELLOW_90 {
   *   background-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .background-color-GREEN_10 {
   *   background-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .background-color-GREEN_20 {
   *   background-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .background-color-GREEN_30 {
   *   background-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .background-color-GREEN_40 {
   *   background-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .background-color-GREEN_50 {
   *   background-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .background-color-GREEN_60 {
   *   background-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .background-color-GREEN_70 {
   *   background-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .background-color-GREEN_80 {
   *   background-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .background-color-GREEN_90 {
   *   background-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .background-color-TEAL_10 {
   *   background-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .background-color-TEAL_20 {
   *   background-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .background-color-TEAL_30 {
   *   background-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .background-color-TEAL_40 {
   *   background-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .background-color-TEAL_50 {
   *   background-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .background-color-TEAL_60 {
   *   background-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .background-color-TEAL_70 {
   *   background-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .background-color-TEAL_80 {
   *   background-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .background-color-TEAL_90 {
   *   background-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .background-color-BLUE_10 {
   *   background-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .background-color-BLUE_20 {
   *   background-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .background-color-BLUE_30 {
   *   background-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .background-color-BLUE_40 {
   *   background-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .background-color-BLUE_50 {
   *   background-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .background-color-BLUE_60 {
   *   background-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .background-color-BLUE_70 {
   *   background-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .background-color-BLUE_80 {
   *   background-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .background-color-BLUE_90 {
   *   background-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_10 {
   *   background-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_20 {
   *   background-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_30 {
   *   background-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_40 {
   *   background-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_50 {
   *   background-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_60 {
   *   background-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_70 {
   *   background-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_80 {
   *   background-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .background-color-INDIGO_90 {
   *   background-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_10 {
   *   background-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_20 {
   *   background-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_30 {
   *   background-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_40 {
   *   background-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_50 {
   *   background-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_60 {
   *   background-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_70 {
   *   background-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_80 {
   *   background-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .background-color-PURPLE_90 {
   *   background-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .background-color-PINK_10 {
   *   background-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .background-color-PINK_20 {
   *   background-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .background-color-PINK_30 {
   *   background-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .background-color-PINK_40 {
   *   background-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .background-color-PINK_50 {
   *   background-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .background-color-PINK_60 {
   *   background-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .background-color-PINK_70 {
   *   background-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .background-color-PINK_80 {
   *   background-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .background-color-PINK_90 {
   *   background-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### background-position
The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.
[Mozilla Developer Network: background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position).
    */
    backgroundPosition: {
      
  /**
   
   
   * ```css
   * .background-position-BOTTOM {
   *   background-position: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-CENTER {
   *   background-position: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-LEFT {
   *   background-position: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-LEFT_BOTTOM {
   *   background-position: left bottom;
   * }
   * ```
   */
  readonly LEFT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-LEFT_TOP {
   *   background-position: left top;
   * }
   * ```
   */
  readonly LEFT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-RIGHT {
   *   background-position: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-RIGHT_BOTTOM {
   *   background-position: right bottom;
   * }
   * ```
   */
  readonly RIGHT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-RIGHT_TOP {
   *   background-position: right top;
   * }
   * ```
   */
  readonly RIGHT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-TOP {
   *   background-position: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  
    }
  

    
  /**
    * ### background-repeat
The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
[Mozilla Developer Network: background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat).
    */
    backgroundRepeat: {
      
  /**
   
   
   * ```css
   * .background-repeat-REPEAT {
   *   background-repeat: background-repeat:repeat;
   * }
   * ```
   */
  readonly REPEAT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-NO_REPEAT {
   *   background-repeat: background-repeat:no-repeat;
   * }
   * ```
   */
  readonly NO_REPEAT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_X {
   *   background-repeat: background-repeat:repeat-x;
   * }
   * ```
   */
  readonly REPEAT_X: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_Y {
   *   background-repeat: background-repeat:repeat-y;
   * }
   * ```
   */
  readonly REPEAT_Y: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_ROUND {
   *   background-repeat: background-repeat:repeat-round;
   * }
   * ```
   */
  readonly REPEAT_ROUND: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_SPACE {
   *   background-repeat: background-repeat:repeat-space;
   * }
   * ```
   */
  readonly REPEAT_SPACE: IDecorators;
  
    }
  

    
  /**
    * ### background-size
The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
[Mozilla Developer Network: background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size).
    */
    backgroundSize: {
      
  /**
   
   
   * ```css
   * .background-size-AUTO {
   *   background-size: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .background-size-COVER {
   *   background-size: cover;
   * }
   * ```
   */
  readonly COVER: IDecorators;
  

  /**
   
   
   * ```css
   * .background-size-CONTAIN {
   *   background-size: contain;
   * }
   * ```
   */
  readonly CONTAIN: IDecorators;
  
    }
  

    
  /**
    * ### border-radius
The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
[Mozilla Developer Network: border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius).
    */
    borderRadius: {
      
  /**
   
   
   * ```css
   * .border-radius-RADIUS_0 {
   *   border-top-left-radius: 0;
   * }
.border-radius-RADIUS_0 {
   *   border-top-right-radius: 0;
   * }
.border-radius-RADIUS_0 {
   *   border-bottom-right-radius: 0;
   * }
.border-radius-RADIUS_0 {
   *   border-bottom-left-radius: 0;
   * }
   * ```
   */
  readonly RADIUS_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-radius-RADIUS_10 {
   *   border-top-left-radius: .125rem;
   * }
.border-radius-RADIUS_10 {
   *   border-top-right-radius: .125rem;
   * }
.border-radius-RADIUS_10 {
   *   border-bottom-right-radius: .125rem;
   * }
.border-radius-RADIUS_10 {
   *   border-bottom-left-radius: .125rem;
   * }
   * ```
   */
  readonly RADIUS_10: IDecorators;
  

  /**
   
   
   * ```css
   * .border-radius-RADIUS_20 {
   *   border-top-left-radius: .25rem;
   * }
.border-radius-RADIUS_20 {
   *   border-top-right-radius: .25rem;
   * }
.border-radius-RADIUS_20 {
   *   border-bottom-right-radius: .25rem;
   * }
.border-radius-RADIUS_20 {
   *   border-bottom-left-radius: .25rem;
   * }
   * ```
   */
  readonly RADIUS_20: IDecorators;
  

  /**
   
   
   * ```css
   * .border-radius-RADIUS_30 {
   *   border-top-left-radius: .5rem;
   * }
.border-radius-RADIUS_30 {
   *   border-top-right-radius: .5rem;
   * }
.border-radius-RADIUS_30 {
   *   border-bottom-right-radius: .5rem;
   * }
.border-radius-RADIUS_30 {
   *   border-bottom-left-radius: .5rem;
   * }
   * ```
   */
  readonly RADIUS_30: IDecorators;
  

  /**
   
   
   * ```css
   * .border-radius-RADIUS_FULL {
   *   border-top-left-radius: 9999px;
   * }
.border-radius-RADIUS_FULL {
   *   border-top-right-radius: 9999px;
   * }
.border-radius-RADIUS_FULL {
   *   border-bottom-right-radius: 9999px;
   * }
.border-radius-RADIUS_FULL {
   *   border-bottom-left-radius: 9999px;
   * }
   * ```
   */
  readonly RADIUS_FULL: IDecorators;
  
    }
  

    
  /**
    * ### border-top-left-radius
The border-top-left-radius CSS property rounds the top-left corner of an element.
[Mozilla Developer Network: border-top-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius).
    */
    borderTopLeftRadius: {
      
  /**
   
   
   * ```css
   * .border-top-left-radius-RADIUS_0 {
   *   border-top-left-radius: 0;
   * }
   * ```
   */
  readonly RADIUS_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-left-radius-RADIUS_10 {
   *   border-top-left-radius: .125rem;
   * }
   * ```
   */
  readonly RADIUS_10: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-left-radius-RADIUS_20 {
   *   border-top-left-radius: .25rem;
   * }
   * ```
   */
  readonly RADIUS_20: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-left-radius-RADIUS_30 {
   *   border-top-left-radius: .5rem;
   * }
   * ```
   */
  readonly RADIUS_30: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-left-radius-RADIUS_FULL {
   *   border-top-left-radius: 9999px;
   * }
   * ```
   */
  readonly RADIUS_FULL: IDecorators;
  
    }
  

    
  /**
    * ### border-top-right-radius
The border-top-right-radius CSS property rounds the top-right corner of an element.
[Mozilla Developer Network: border-top-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius).
    */
    borderTopRightRadius: {
      
  /**
   
   
   * ```css
   * .border-top-right-radius-RADIUS_0 {
   *   border-top-right-radius: 0;
   * }
   * ```
   */
  readonly RADIUS_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-right-radius-RADIUS_10 {
   *   border-top-right-radius: .125rem;
   * }
   * ```
   */
  readonly RADIUS_10: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-right-radius-RADIUS_20 {
   *   border-top-right-radius: .25rem;
   * }
   * ```
   */
  readonly RADIUS_20: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-right-radius-RADIUS_30 {
   *   border-top-right-radius: .5rem;
   * }
   * ```
   */
  readonly RADIUS_30: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-right-radius-RADIUS_FULL {
   *   border-top-right-radius: 9999px;
   * }
   * ```
   */
  readonly RADIUS_FULL: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-right-radius
The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
[Mozilla Developer Network: border-bottom-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius).
    */
    borderBottomRightRadius: {
      
  /**
   
   
   * ```css
   * .border-bottom-right-radius-RADIUS_0 {
   *   border-bottom-right-radius: 0;
   * }
   * ```
   */
  readonly RADIUS_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-right-radius-RADIUS_10 {
   *   border-bottom-right-radius: .125rem;
   * }
   * ```
   */
  readonly RADIUS_10: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-right-radius-RADIUS_20 {
   *   border-bottom-right-radius: .25rem;
   * }
   * ```
   */
  readonly RADIUS_20: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-right-radius-RADIUS_30 {
   *   border-bottom-right-radius: .5rem;
   * }
   * ```
   */
  readonly RADIUS_30: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-right-radius-RADIUS_FULL {
   *   border-bottom-right-radius: 9999px;
   * }
   * ```
   */
  readonly RADIUS_FULL: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-left-radius
The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
[Mozilla Developer Network: border-bottom-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius).
    */
    borderBottomLeftRadius: {
      
  /**
   
   
   * ```css
   * .border-bottom-left-radius-RADIUS_0 {
   *   border-bottom-left-radius: 0;
   * }
   * ```
   */
  readonly RADIUS_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-left-radius-RADIUS_10 {
   *   border-bottom-left-radius: .125rem;
   * }
   * ```
   */
  readonly RADIUS_10: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-left-radius-RADIUS_20 {
   *   border-bottom-left-radius: .25rem;
   * }
   * ```
   */
  readonly RADIUS_20: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-left-radius-RADIUS_30 {
   *   border-bottom-left-radius: .5rem;
   * }
   * ```
   */
  readonly RADIUS_30: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-left-radius-RADIUS_FULL {
   *   border-bottom-left-radius: 9999px;
   * }
   * ```
   */
  readonly RADIUS_FULL: IDecorators;
  
    }
  

    
  /**
    * ### border-color
The border-color shorthand CSS property sets the color of an element's border.
[Mozilla Developer Network: border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color).
    */
    borderColor: {
      
  /**
   
   
   * ```css
   * .border-color-TRANSPARENT {
   *   border-top-color: transparent;
   * }
.border-color-TRANSPARENT {
   *   border-right-color: transparent;
   * }
.border-color-TRANSPARENT {
   *   border-bottom-color: transparent;
   * }
.border-color-TRANSPARENT {
   *   border-left-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .border-color-BLACK {
   *   border-top-color: #000;
   * }
.border-color-BLACK {
   *   border-right-color: #000;
   * }
.border-color-BLACK {
   *   border-bottom-color: #000;
   * }
.border-color-BLACK {
   *   border-left-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .border-color-WHITE {
   *   border-top-color: #fff;
   * }
.border-color-WHITE {
   *   border-right-color: #fff;
   * }
.border-color-WHITE {
   *   border-bottom-color: #fff;
   * }
.border-color-WHITE {
   *   border-left-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .border-color-GRAY_10 {
   *   border-top-color: #f7fafc;
   * }
.border-color-GRAY_10 {
   *   border-right-color: #f7fafc;
   * }
.border-color-GRAY_10 {
   *   border-bottom-color: #f7fafc;
   * }
.border-color-GRAY_10 {
   *   border-left-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .border-color-GRAY_20 {
   *   border-top-color: #edf2f7;
   * }
.border-color-GRAY_20 {
   *   border-right-color: #edf2f7;
   * }
.border-color-GRAY_20 {
   *   border-bottom-color: #edf2f7;
   * }
.border-color-GRAY_20 {
   *   border-left-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .border-color-GRAY_30 {
   *   border-top-color: #e2e8f0;
   * }
.border-color-GRAY_30 {
   *   border-right-color: #e2e8f0;
   * }
.border-color-GRAY_30 {
   *   border-bottom-color: #e2e8f0;
   * }
.border-color-GRAY_30 {
   *   border-left-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .border-color-GRAY_40 {
   *   border-top-color: #cbd5e0;
   * }
.border-color-GRAY_40 {
   *   border-right-color: #cbd5e0;
   * }
.border-color-GRAY_40 {
   *   border-bottom-color: #cbd5e0;
   * }
.border-color-GRAY_40 {
   *   border-left-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .border-color-GRAY_50 {
   *   border-top-color: #a0aec0;
   * }
.border-color-GRAY_50 {
   *   border-right-color: #a0aec0;
   * }
.border-color-GRAY_50 {
   *   border-bottom-color: #a0aec0;
   * }
.border-color-GRAY_50 {
   *   border-left-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .border-color-GRAY_60 {
   *   border-top-color: #718096;
   * }
.border-color-GRAY_60 {
   *   border-right-color: #718096;
   * }
.border-color-GRAY_60 {
   *   border-bottom-color: #718096;
   * }
.border-color-GRAY_60 {
   *   border-left-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .border-color-GRAY_70 {
   *   border-top-color: #4a5568;
   * }
.border-color-GRAY_70 {
   *   border-right-color: #4a5568;
   * }
.border-color-GRAY_70 {
   *   border-bottom-color: #4a5568;
   * }
.border-color-GRAY_70 {
   *   border-left-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .border-color-GRAY_80 {
   *   border-top-color: #2d3748;
   * }
.border-color-GRAY_80 {
   *   border-right-color: #2d3748;
   * }
.border-color-GRAY_80 {
   *   border-bottom-color: #2d3748;
   * }
.border-color-GRAY_80 {
   *   border-left-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .border-color-GRAY_90 {
   *   border-top-color: #1a202c;
   * }
.border-color-GRAY_90 {
   *   border-right-color: #1a202c;
   * }
.border-color-GRAY_90 {
   *   border-bottom-color: #1a202c;
   * }
.border-color-GRAY_90 {
   *   border-left-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .border-color-RED_10 {
   *   border-top-color: #fff5f5;
   * }
.border-color-RED_10 {
   *   border-right-color: #fff5f5;
   * }
.border-color-RED_10 {
   *   border-bottom-color: #fff5f5;
   * }
.border-color-RED_10 {
   *   border-left-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .border-color-RED_20 {
   *   border-top-color: #fed7d7;
   * }
.border-color-RED_20 {
   *   border-right-color: #fed7d7;
   * }
.border-color-RED_20 {
   *   border-bottom-color: #fed7d7;
   * }
.border-color-RED_20 {
   *   border-left-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .border-color-RED_30 {
   *   border-top-color: #feb2b2;
   * }
.border-color-RED_30 {
   *   border-right-color: #feb2b2;
   * }
.border-color-RED_30 {
   *   border-bottom-color: #feb2b2;
   * }
.border-color-RED_30 {
   *   border-left-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .border-color-RED_40 {
   *   border-top-color: #fc8181;
   * }
.border-color-RED_40 {
   *   border-right-color: #fc8181;
   * }
.border-color-RED_40 {
   *   border-bottom-color: #fc8181;
   * }
.border-color-RED_40 {
   *   border-left-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .border-color-RED_50 {
   *   border-top-color: #f56565;
   * }
.border-color-RED_50 {
   *   border-right-color: #f56565;
   * }
.border-color-RED_50 {
   *   border-bottom-color: #f56565;
   * }
.border-color-RED_50 {
   *   border-left-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .border-color-RED_60 {
   *   border-top-color: #e53e3e;
   * }
.border-color-RED_60 {
   *   border-right-color: #e53e3e;
   * }
.border-color-RED_60 {
   *   border-bottom-color: #e53e3e;
   * }
.border-color-RED_60 {
   *   border-left-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .border-color-RED_70 {
   *   border-top-color: #c53030;
   * }
.border-color-RED_70 {
   *   border-right-color: #c53030;
   * }
.border-color-RED_70 {
   *   border-bottom-color: #c53030;
   * }
.border-color-RED_70 {
   *   border-left-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .border-color-RED_80 {
   *   border-top-color: #9b2c2c;
   * }
.border-color-RED_80 {
   *   border-right-color: #9b2c2c;
   * }
.border-color-RED_80 {
   *   border-bottom-color: #9b2c2c;
   * }
.border-color-RED_80 {
   *   border-left-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .border-color-RED_90 {
   *   border-top-color: #742a2a;
   * }
.border-color-RED_90 {
   *   border-right-color: #742a2a;
   * }
.border-color-RED_90 {
   *   border-bottom-color: #742a2a;
   * }
.border-color-RED_90 {
   *   border-left-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_10 {
   *   border-top-color: #fffaf0;
   * }
.border-color-ORANGE_10 {
   *   border-right-color: #fffaf0;
   * }
.border-color-ORANGE_10 {
   *   border-bottom-color: #fffaf0;
   * }
.border-color-ORANGE_10 {
   *   border-left-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_20 {
   *   border-top-color: #feebc8;
   * }
.border-color-ORANGE_20 {
   *   border-right-color: #feebc8;
   * }
.border-color-ORANGE_20 {
   *   border-bottom-color: #feebc8;
   * }
.border-color-ORANGE_20 {
   *   border-left-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_30 {
   *   border-top-color: #fbd38d;
   * }
.border-color-ORANGE_30 {
   *   border-right-color: #fbd38d;
   * }
.border-color-ORANGE_30 {
   *   border-bottom-color: #fbd38d;
   * }
.border-color-ORANGE_30 {
   *   border-left-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_40 {
   *   border-top-color: #f6ad55;
   * }
.border-color-ORANGE_40 {
   *   border-right-color: #f6ad55;
   * }
.border-color-ORANGE_40 {
   *   border-bottom-color: #f6ad55;
   * }
.border-color-ORANGE_40 {
   *   border-left-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_50 {
   *   border-top-color: #ed8936;
   * }
.border-color-ORANGE_50 {
   *   border-right-color: #ed8936;
   * }
.border-color-ORANGE_50 {
   *   border-bottom-color: #ed8936;
   * }
.border-color-ORANGE_50 {
   *   border-left-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_60 {
   *   border-top-color: #dd6b20;
   * }
.border-color-ORANGE_60 {
   *   border-right-color: #dd6b20;
   * }
.border-color-ORANGE_60 {
   *   border-bottom-color: #dd6b20;
   * }
.border-color-ORANGE_60 {
   *   border-left-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_70 {
   *   border-top-color: #c05621;
   * }
.border-color-ORANGE_70 {
   *   border-right-color: #c05621;
   * }
.border-color-ORANGE_70 {
   *   border-bottom-color: #c05621;
   * }
.border-color-ORANGE_70 {
   *   border-left-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_80 {
   *   border-top-color: #9c4221;
   * }
.border-color-ORANGE_80 {
   *   border-right-color: #9c4221;
   * }
.border-color-ORANGE_80 {
   *   border-bottom-color: #9c4221;
   * }
.border-color-ORANGE_80 {
   *   border-left-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .border-color-ORANGE_90 {
   *   border-top-color: #7b341e;
   * }
.border-color-ORANGE_90 {
   *   border-right-color: #7b341e;
   * }
.border-color-ORANGE_90 {
   *   border-bottom-color: #7b341e;
   * }
.border-color-ORANGE_90 {
   *   border-left-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_10 {
   *   border-top-color: #fffff0;
   * }
.border-color-YELLOW_10 {
   *   border-right-color: #fffff0;
   * }
.border-color-YELLOW_10 {
   *   border-bottom-color: #fffff0;
   * }
.border-color-YELLOW_10 {
   *   border-left-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_20 {
   *   border-top-color: #fefcbf;
   * }
.border-color-YELLOW_20 {
   *   border-right-color: #fefcbf;
   * }
.border-color-YELLOW_20 {
   *   border-bottom-color: #fefcbf;
   * }
.border-color-YELLOW_20 {
   *   border-left-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_30 {
   *   border-top-color: #faf089;
   * }
.border-color-YELLOW_30 {
   *   border-right-color: #faf089;
   * }
.border-color-YELLOW_30 {
   *   border-bottom-color: #faf089;
   * }
.border-color-YELLOW_30 {
   *   border-left-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_40 {
   *   border-top-color: #f6e05e;
   * }
.border-color-YELLOW_40 {
   *   border-right-color: #f6e05e;
   * }
.border-color-YELLOW_40 {
   *   border-bottom-color: #f6e05e;
   * }
.border-color-YELLOW_40 {
   *   border-left-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_50 {
   *   border-top-color: #ecc94b;
   * }
.border-color-YELLOW_50 {
   *   border-right-color: #ecc94b;
   * }
.border-color-YELLOW_50 {
   *   border-bottom-color: #ecc94b;
   * }
.border-color-YELLOW_50 {
   *   border-left-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_60 {
   *   border-top-color: #d69e2e;
   * }
.border-color-YELLOW_60 {
   *   border-right-color: #d69e2e;
   * }
.border-color-YELLOW_60 {
   *   border-bottom-color: #d69e2e;
   * }
.border-color-YELLOW_60 {
   *   border-left-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_70 {
   *   border-top-color: #b7791f;
   * }
.border-color-YELLOW_70 {
   *   border-right-color: #b7791f;
   * }
.border-color-YELLOW_70 {
   *   border-bottom-color: #b7791f;
   * }
.border-color-YELLOW_70 {
   *   border-left-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_80 {
   *   border-top-color: #975a16;
   * }
.border-color-YELLOW_80 {
   *   border-right-color: #975a16;
   * }
.border-color-YELLOW_80 {
   *   border-bottom-color: #975a16;
   * }
.border-color-YELLOW_80 {
   *   border-left-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .border-color-YELLOW_90 {
   *   border-top-color: #744210;
   * }
.border-color-YELLOW_90 {
   *   border-right-color: #744210;
   * }
.border-color-YELLOW_90 {
   *   border-bottom-color: #744210;
   * }
.border-color-YELLOW_90 {
   *   border-left-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .border-color-GREEN_10 {
   *   border-top-color: #f0fff4;
   * }
.border-color-GREEN_10 {
   *   border-right-color: #f0fff4;
   * }
.border-color-GREEN_10 {
   *   border-bottom-color: #f0fff4;
   * }
.border-color-GREEN_10 {
   *   border-left-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .border-color-GREEN_20 {
   *   border-top-color: #c6f6d5;
   * }
.border-color-GREEN_20 {
   *   border-right-color: #c6f6d5;
   * }
.border-color-GREEN_20 {
   *   border-bottom-color: #c6f6d5;
   * }
.border-color-GREEN_20 {
   *   border-left-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .border-color-GREEN_30 {
   *   border-top-color: #9ae6b4;
   * }
.border-color-GREEN_30 {
   *   border-right-color: #9ae6b4;
   * }
.border-color-GREEN_30 {
   *   border-bottom-color: #9ae6b4;
   * }
.border-color-GREEN_30 {
   *   border-left-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .border-color-GREEN_40 {
   *   border-top-color: #68d391;
   * }
.border-color-GREEN_40 {
   *   border-right-color: #68d391;
   * }
.border-color-GREEN_40 {
   *   border-bottom-color: #68d391;
   * }
.border-color-GREEN_40 {
   *   border-left-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .border-color-GREEN_50 {
   *   border-top-color: #48bb78;
   * }
.border-color-GREEN_50 {
   *   border-right-color: #48bb78;
   * }
.border-color-GREEN_50 {
   *   border-bottom-color: #48bb78;
   * }
.border-color-GREEN_50 {
   *   border-left-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .border-color-GREEN_60 {
   *   border-top-color: #38a169;
   * }
.border-color-GREEN_60 {
   *   border-right-color: #38a169;
   * }
.border-color-GREEN_60 {
   *   border-bottom-color: #38a169;
   * }
.border-color-GREEN_60 {
   *   border-left-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .border-color-GREEN_70 {
   *   border-top-color: #2f855a;
   * }
.border-color-GREEN_70 {
   *   border-right-color: #2f855a;
   * }
.border-color-GREEN_70 {
   *   border-bottom-color: #2f855a;
   * }
.border-color-GREEN_70 {
   *   border-left-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .border-color-GREEN_80 {
   *   border-top-color: #276749;
   * }
.border-color-GREEN_80 {
   *   border-right-color: #276749;
   * }
.border-color-GREEN_80 {
   *   border-bottom-color: #276749;
   * }
.border-color-GREEN_80 {
   *   border-left-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .border-color-GREEN_90 {
   *   border-top-color: #22543d;
   * }
.border-color-GREEN_90 {
   *   border-right-color: #22543d;
   * }
.border-color-GREEN_90 {
   *   border-bottom-color: #22543d;
   * }
.border-color-GREEN_90 {
   *   border-left-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .border-color-TEAL_10 {
   *   border-top-color: #e6fffa;
   * }
.border-color-TEAL_10 {
   *   border-right-color: #e6fffa;
   * }
.border-color-TEAL_10 {
   *   border-bottom-color: #e6fffa;
   * }
.border-color-TEAL_10 {
   *   border-left-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .border-color-TEAL_20 {
   *   border-top-color: #b2f5ea;
   * }
.border-color-TEAL_20 {
   *   border-right-color: #b2f5ea;
   * }
.border-color-TEAL_20 {
   *   border-bottom-color: #b2f5ea;
   * }
.border-color-TEAL_20 {
   *   border-left-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .border-color-TEAL_30 {
   *   border-top-color: #81e6d9;
   * }
.border-color-TEAL_30 {
   *   border-right-color: #81e6d9;
   * }
.border-color-TEAL_30 {
   *   border-bottom-color: #81e6d9;
   * }
.border-color-TEAL_30 {
   *   border-left-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .border-color-TEAL_40 {
   *   border-top-color: #4fd1c5;
   * }
.border-color-TEAL_40 {
   *   border-right-color: #4fd1c5;
   * }
.border-color-TEAL_40 {
   *   border-bottom-color: #4fd1c5;
   * }
.border-color-TEAL_40 {
   *   border-left-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .border-color-TEAL_50 {
   *   border-top-color: #38b2ac;
   * }
.border-color-TEAL_50 {
   *   border-right-color: #38b2ac;
   * }
.border-color-TEAL_50 {
   *   border-bottom-color: #38b2ac;
   * }
.border-color-TEAL_50 {
   *   border-left-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .border-color-TEAL_60 {
   *   border-top-color: #319795;
   * }
.border-color-TEAL_60 {
   *   border-right-color: #319795;
   * }
.border-color-TEAL_60 {
   *   border-bottom-color: #319795;
   * }
.border-color-TEAL_60 {
   *   border-left-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .border-color-TEAL_70 {
   *   border-top-color: #2c7a7b;
   * }
.border-color-TEAL_70 {
   *   border-right-color: #2c7a7b;
   * }
.border-color-TEAL_70 {
   *   border-bottom-color: #2c7a7b;
   * }
.border-color-TEAL_70 {
   *   border-left-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .border-color-TEAL_80 {
   *   border-top-color: #285e61;
   * }
.border-color-TEAL_80 {
   *   border-right-color: #285e61;
   * }
.border-color-TEAL_80 {
   *   border-bottom-color: #285e61;
   * }
.border-color-TEAL_80 {
   *   border-left-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .border-color-TEAL_90 {
   *   border-top-color: #234e52;
   * }
.border-color-TEAL_90 {
   *   border-right-color: #234e52;
   * }
.border-color-TEAL_90 {
   *   border-bottom-color: #234e52;
   * }
.border-color-TEAL_90 {
   *   border-left-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .border-color-BLUE_10 {
   *   border-top-color: #ebf8ff;
   * }
.border-color-BLUE_10 {
   *   border-right-color: #ebf8ff;
   * }
.border-color-BLUE_10 {
   *   border-bottom-color: #ebf8ff;
   * }
.border-color-BLUE_10 {
   *   border-left-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .border-color-BLUE_20 {
   *   border-top-color: #bee3f8;
   * }
.border-color-BLUE_20 {
   *   border-right-color: #bee3f8;
   * }
.border-color-BLUE_20 {
   *   border-bottom-color: #bee3f8;
   * }
.border-color-BLUE_20 {
   *   border-left-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .border-color-BLUE_30 {
   *   border-top-color: #90cdf4;
   * }
.border-color-BLUE_30 {
   *   border-right-color: #90cdf4;
   * }
.border-color-BLUE_30 {
   *   border-bottom-color: #90cdf4;
   * }
.border-color-BLUE_30 {
   *   border-left-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .border-color-BLUE_40 {
   *   border-top-color: #63b3ed;
   * }
.border-color-BLUE_40 {
   *   border-right-color: #63b3ed;
   * }
.border-color-BLUE_40 {
   *   border-bottom-color: #63b3ed;
   * }
.border-color-BLUE_40 {
   *   border-left-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .border-color-BLUE_50 {
   *   border-top-color: #4299e1;
   * }
.border-color-BLUE_50 {
   *   border-right-color: #4299e1;
   * }
.border-color-BLUE_50 {
   *   border-bottom-color: #4299e1;
   * }
.border-color-BLUE_50 {
   *   border-left-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .border-color-BLUE_60 {
   *   border-top-color: #3182ce;
   * }
.border-color-BLUE_60 {
   *   border-right-color: #3182ce;
   * }
.border-color-BLUE_60 {
   *   border-bottom-color: #3182ce;
   * }
.border-color-BLUE_60 {
   *   border-left-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .border-color-BLUE_70 {
   *   border-top-color: #2b6cb0;
   * }
.border-color-BLUE_70 {
   *   border-right-color: #2b6cb0;
   * }
.border-color-BLUE_70 {
   *   border-bottom-color: #2b6cb0;
   * }
.border-color-BLUE_70 {
   *   border-left-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .border-color-BLUE_80 {
   *   border-top-color: #2c5282;
   * }
.border-color-BLUE_80 {
   *   border-right-color: #2c5282;
   * }
.border-color-BLUE_80 {
   *   border-bottom-color: #2c5282;
   * }
.border-color-BLUE_80 {
   *   border-left-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .border-color-BLUE_90 {
   *   border-top-color: #2a4365;
   * }
.border-color-BLUE_90 {
   *   border-right-color: #2a4365;
   * }
.border-color-BLUE_90 {
   *   border-bottom-color: #2a4365;
   * }
.border-color-BLUE_90 {
   *   border-left-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_10 {
   *   border-top-color: #ebf4ff;
   * }
.border-color-INDIGO_10 {
   *   border-right-color: #ebf4ff;
   * }
.border-color-INDIGO_10 {
   *   border-bottom-color: #ebf4ff;
   * }
.border-color-INDIGO_10 {
   *   border-left-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_20 {
   *   border-top-color: #c3dafe;
   * }
.border-color-INDIGO_20 {
   *   border-right-color: #c3dafe;
   * }
.border-color-INDIGO_20 {
   *   border-bottom-color: #c3dafe;
   * }
.border-color-INDIGO_20 {
   *   border-left-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_30 {
   *   border-top-color: #a3bffa;
   * }
.border-color-INDIGO_30 {
   *   border-right-color: #a3bffa;
   * }
.border-color-INDIGO_30 {
   *   border-bottom-color: #a3bffa;
   * }
.border-color-INDIGO_30 {
   *   border-left-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_40 {
   *   border-top-color: #7f9cf5;
   * }
.border-color-INDIGO_40 {
   *   border-right-color: #7f9cf5;
   * }
.border-color-INDIGO_40 {
   *   border-bottom-color: #7f9cf5;
   * }
.border-color-INDIGO_40 {
   *   border-left-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_50 {
   *   border-top-color: #667eea;
   * }
.border-color-INDIGO_50 {
   *   border-right-color: #667eea;
   * }
.border-color-INDIGO_50 {
   *   border-bottom-color: #667eea;
   * }
.border-color-INDIGO_50 {
   *   border-left-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_60 {
   *   border-top-color: #5a67d8;
   * }
.border-color-INDIGO_60 {
   *   border-right-color: #5a67d8;
   * }
.border-color-INDIGO_60 {
   *   border-bottom-color: #5a67d8;
   * }
.border-color-INDIGO_60 {
   *   border-left-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_70 {
   *   border-top-color: #4c51bf;
   * }
.border-color-INDIGO_70 {
   *   border-right-color: #4c51bf;
   * }
.border-color-INDIGO_70 {
   *   border-bottom-color: #4c51bf;
   * }
.border-color-INDIGO_70 {
   *   border-left-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_80 {
   *   border-top-color: #434190;
   * }
.border-color-INDIGO_80 {
   *   border-right-color: #434190;
   * }
.border-color-INDIGO_80 {
   *   border-bottom-color: #434190;
   * }
.border-color-INDIGO_80 {
   *   border-left-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .border-color-INDIGO_90 {
   *   border-top-color: #3c366b;
   * }
.border-color-INDIGO_90 {
   *   border-right-color: #3c366b;
   * }
.border-color-INDIGO_90 {
   *   border-bottom-color: #3c366b;
   * }
.border-color-INDIGO_90 {
   *   border-left-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_10 {
   *   border-top-color: #faf5ff;
   * }
.border-color-PURPLE_10 {
   *   border-right-color: #faf5ff;
   * }
.border-color-PURPLE_10 {
   *   border-bottom-color: #faf5ff;
   * }
.border-color-PURPLE_10 {
   *   border-left-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_20 {
   *   border-top-color: #e9d8fd;
   * }
.border-color-PURPLE_20 {
   *   border-right-color: #e9d8fd;
   * }
.border-color-PURPLE_20 {
   *   border-bottom-color: #e9d8fd;
   * }
.border-color-PURPLE_20 {
   *   border-left-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_30 {
   *   border-top-color: #d6bcfa;
   * }
.border-color-PURPLE_30 {
   *   border-right-color: #d6bcfa;
   * }
.border-color-PURPLE_30 {
   *   border-bottom-color: #d6bcfa;
   * }
.border-color-PURPLE_30 {
   *   border-left-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_40 {
   *   border-top-color: #b794f4;
   * }
.border-color-PURPLE_40 {
   *   border-right-color: #b794f4;
   * }
.border-color-PURPLE_40 {
   *   border-bottom-color: #b794f4;
   * }
.border-color-PURPLE_40 {
   *   border-left-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_50 {
   *   border-top-color: #9f7aea;
   * }
.border-color-PURPLE_50 {
   *   border-right-color: #9f7aea;
   * }
.border-color-PURPLE_50 {
   *   border-bottom-color: #9f7aea;
   * }
.border-color-PURPLE_50 {
   *   border-left-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_60 {
   *   border-top-color: #805ad5;
   * }
.border-color-PURPLE_60 {
   *   border-right-color: #805ad5;
   * }
.border-color-PURPLE_60 {
   *   border-bottom-color: #805ad5;
   * }
.border-color-PURPLE_60 {
   *   border-left-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_70 {
   *   border-top-color: #6b46c1;
   * }
.border-color-PURPLE_70 {
   *   border-right-color: #6b46c1;
   * }
.border-color-PURPLE_70 {
   *   border-bottom-color: #6b46c1;
   * }
.border-color-PURPLE_70 {
   *   border-left-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_80 {
   *   border-top-color: #553c9a;
   * }
.border-color-PURPLE_80 {
   *   border-right-color: #553c9a;
   * }
.border-color-PURPLE_80 {
   *   border-bottom-color: #553c9a;
   * }
.border-color-PURPLE_80 {
   *   border-left-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .border-color-PURPLE_90 {
   *   border-top-color: #44337a;
   * }
.border-color-PURPLE_90 {
   *   border-right-color: #44337a;
   * }
.border-color-PURPLE_90 {
   *   border-bottom-color: #44337a;
   * }
.border-color-PURPLE_90 {
   *   border-left-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .border-color-PINK_10 {
   *   border-top-color: #fff5f7;
   * }
.border-color-PINK_10 {
   *   border-right-color: #fff5f7;
   * }
.border-color-PINK_10 {
   *   border-bottom-color: #fff5f7;
   * }
.border-color-PINK_10 {
   *   border-left-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .border-color-PINK_20 {
   *   border-top-color: #fed7e2;
   * }
.border-color-PINK_20 {
   *   border-right-color: #fed7e2;
   * }
.border-color-PINK_20 {
   *   border-bottom-color: #fed7e2;
   * }
.border-color-PINK_20 {
   *   border-left-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .border-color-PINK_30 {
   *   border-top-color: #fbb6ce;
   * }
.border-color-PINK_30 {
   *   border-right-color: #fbb6ce;
   * }
.border-color-PINK_30 {
   *   border-bottom-color: #fbb6ce;
   * }
.border-color-PINK_30 {
   *   border-left-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .border-color-PINK_40 {
   *   border-top-color: #f687b3;
   * }
.border-color-PINK_40 {
   *   border-right-color: #f687b3;
   * }
.border-color-PINK_40 {
   *   border-bottom-color: #f687b3;
   * }
.border-color-PINK_40 {
   *   border-left-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .border-color-PINK_50 {
   *   border-top-color: #ed64a6;
   * }
.border-color-PINK_50 {
   *   border-right-color: #ed64a6;
   * }
.border-color-PINK_50 {
   *   border-bottom-color: #ed64a6;
   * }
.border-color-PINK_50 {
   *   border-left-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .border-color-PINK_60 {
   *   border-top-color: #d53f8c;
   * }
.border-color-PINK_60 {
   *   border-right-color: #d53f8c;
   * }
.border-color-PINK_60 {
   *   border-bottom-color: #d53f8c;
   * }
.border-color-PINK_60 {
   *   border-left-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .border-color-PINK_70 {
   *   border-top-color: #b83280;
   * }
.border-color-PINK_70 {
   *   border-right-color: #b83280;
   * }
.border-color-PINK_70 {
   *   border-bottom-color: #b83280;
   * }
.border-color-PINK_70 {
   *   border-left-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .border-color-PINK_80 {
   *   border-top-color: #97266d;
   * }
.border-color-PINK_80 {
   *   border-right-color: #97266d;
   * }
.border-color-PINK_80 {
   *   border-bottom-color: #97266d;
   * }
.border-color-PINK_80 {
   *   border-left-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .border-color-PINK_90 {
   *   border-top-color: #702459;
   * }
.border-color-PINK_90 {
   *   border-right-color: #702459;
   * }
.border-color-PINK_90 {
   *   border-bottom-color: #702459;
   * }
.border-color-PINK_90 {
   *   border-left-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### border-top-color
The border-top-color CSS property sets the color of an element's top border. 
[Mozilla Developer Network: border-top-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color).
    */
    borderTopColor: {
      
  /**
   
   
   * ```css
   * .border-top-color-TRANSPARENT {
   *   border-top-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .border-top-color-BLACK {
   *   border-top-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .border-top-color-WHITE {
   *   border-top-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_10 {
   *   border-top-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_20 {
   *   border-top-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_30 {
   *   border-top-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_40 {
   *   border-top-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_50 {
   *   border-top-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_60 {
   *   border-top-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_70 {
   *   border-top-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_80 {
   *   border-top-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .border-top-color-GRAY_90 {
   *   border-top-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .border-top-color-RED_10 {
   *   border-top-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .border-top-color-RED_20 {
   *   border-top-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .border-top-color-RED_30 {
   *   border-top-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .border-top-color-RED_40 {
   *   border-top-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .border-top-color-RED_50 {
   *   border-top-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .border-top-color-RED_60 {
   *   border-top-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .border-top-color-RED_70 {
   *   border-top-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .border-top-color-RED_80 {
   *   border-top-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .border-top-color-RED_90 {
   *   border-top-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_10 {
   *   border-top-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_20 {
   *   border-top-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_30 {
   *   border-top-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_40 {
   *   border-top-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_50 {
   *   border-top-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_60 {
   *   border-top-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_70 {
   *   border-top-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_80 {
   *   border-top-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .border-top-color-ORANGE_90 {
   *   border-top-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_10 {
   *   border-top-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_20 {
   *   border-top-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_30 {
   *   border-top-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_40 {
   *   border-top-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_50 {
   *   border-top-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_60 {
   *   border-top-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_70 {
   *   border-top-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_80 {
   *   border-top-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .border-top-color-YELLOW_90 {
   *   border-top-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_10 {
   *   border-top-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_20 {
   *   border-top-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_30 {
   *   border-top-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_40 {
   *   border-top-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_50 {
   *   border-top-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_60 {
   *   border-top-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_70 {
   *   border-top-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_80 {
   *   border-top-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .border-top-color-GREEN_90 {
   *   border-top-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_10 {
   *   border-top-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_20 {
   *   border-top-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_30 {
   *   border-top-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_40 {
   *   border-top-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_50 {
   *   border-top-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_60 {
   *   border-top-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_70 {
   *   border-top-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_80 {
   *   border-top-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .border-top-color-TEAL_90 {
   *   border-top-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_10 {
   *   border-top-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_20 {
   *   border-top-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_30 {
   *   border-top-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_40 {
   *   border-top-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_50 {
   *   border-top-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_60 {
   *   border-top-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_70 {
   *   border-top-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_80 {
   *   border-top-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .border-top-color-BLUE_90 {
   *   border-top-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_10 {
   *   border-top-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_20 {
   *   border-top-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_30 {
   *   border-top-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_40 {
   *   border-top-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_50 {
   *   border-top-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_60 {
   *   border-top-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_70 {
   *   border-top-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_80 {
   *   border-top-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .border-top-color-INDIGO_90 {
   *   border-top-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_10 {
   *   border-top-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_20 {
   *   border-top-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_30 {
   *   border-top-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_40 {
   *   border-top-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_50 {
   *   border-top-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_60 {
   *   border-top-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_70 {
   *   border-top-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_80 {
   *   border-top-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .border-top-color-PURPLE_90 {
   *   border-top-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_10 {
   *   border-top-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_20 {
   *   border-top-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_30 {
   *   border-top-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_40 {
   *   border-top-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_50 {
   *   border-top-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_60 {
   *   border-top-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_70 {
   *   border-top-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_80 {
   *   border-top-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .border-top-color-PINK_90 {
   *   border-top-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### border-right-color
The border-right-color CSS property sets the color of an element's right border. 
[Mozilla Developer Network: border-right-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color).
    */
    borderRightColor: {
      
  /**
   
   
   * ```css
   * .border-right-color-TRANSPARENT {
   *   border-right-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .border-right-color-BLACK {
   *   border-right-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .border-right-color-WHITE {
   *   border-right-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_10 {
   *   border-right-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_20 {
   *   border-right-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_30 {
   *   border-right-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_40 {
   *   border-right-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_50 {
   *   border-right-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_60 {
   *   border-right-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_70 {
   *   border-right-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_80 {
   *   border-right-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .border-right-color-GRAY_90 {
   *   border-right-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .border-right-color-RED_10 {
   *   border-right-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .border-right-color-RED_20 {
   *   border-right-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .border-right-color-RED_30 {
   *   border-right-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .border-right-color-RED_40 {
   *   border-right-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .border-right-color-RED_50 {
   *   border-right-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .border-right-color-RED_60 {
   *   border-right-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .border-right-color-RED_70 {
   *   border-right-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .border-right-color-RED_80 {
   *   border-right-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .border-right-color-RED_90 {
   *   border-right-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_10 {
   *   border-right-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_20 {
   *   border-right-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_30 {
   *   border-right-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_40 {
   *   border-right-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_50 {
   *   border-right-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_60 {
   *   border-right-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_70 {
   *   border-right-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_80 {
   *   border-right-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .border-right-color-ORANGE_90 {
   *   border-right-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_10 {
   *   border-right-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_20 {
   *   border-right-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_30 {
   *   border-right-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_40 {
   *   border-right-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_50 {
   *   border-right-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_60 {
   *   border-right-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_70 {
   *   border-right-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_80 {
   *   border-right-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .border-right-color-YELLOW_90 {
   *   border-right-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_10 {
   *   border-right-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_20 {
   *   border-right-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_30 {
   *   border-right-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_40 {
   *   border-right-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_50 {
   *   border-right-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_60 {
   *   border-right-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_70 {
   *   border-right-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_80 {
   *   border-right-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .border-right-color-GREEN_90 {
   *   border-right-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_10 {
   *   border-right-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_20 {
   *   border-right-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_30 {
   *   border-right-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_40 {
   *   border-right-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_50 {
   *   border-right-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_60 {
   *   border-right-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_70 {
   *   border-right-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_80 {
   *   border-right-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .border-right-color-TEAL_90 {
   *   border-right-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_10 {
   *   border-right-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_20 {
   *   border-right-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_30 {
   *   border-right-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_40 {
   *   border-right-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_50 {
   *   border-right-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_60 {
   *   border-right-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_70 {
   *   border-right-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_80 {
   *   border-right-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .border-right-color-BLUE_90 {
   *   border-right-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_10 {
   *   border-right-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_20 {
   *   border-right-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_30 {
   *   border-right-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_40 {
   *   border-right-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_50 {
   *   border-right-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_60 {
   *   border-right-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_70 {
   *   border-right-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_80 {
   *   border-right-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .border-right-color-INDIGO_90 {
   *   border-right-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_10 {
   *   border-right-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_20 {
   *   border-right-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_30 {
   *   border-right-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_40 {
   *   border-right-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_50 {
   *   border-right-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_60 {
   *   border-right-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_70 {
   *   border-right-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_80 {
   *   border-right-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .border-right-color-PURPLE_90 {
   *   border-right-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_10 {
   *   border-right-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_20 {
   *   border-right-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_30 {
   *   border-right-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_40 {
   *   border-right-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_50 {
   *   border-right-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_60 {
   *   border-right-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_70 {
   *   border-right-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_80 {
   *   border-right-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .border-right-color-PINK_90 {
   *   border-right-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-color
The border-bottom-color CSS property sets the color of an element's bottom border. 
[Mozilla Developer Network: border-bottom-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color).
    */
    borderBottomColor: {
      
  /**
   
   
   * ```css
   * .border-bottom-color-TRANSPARENT {
   *   border-bottom-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLACK {
   *   border-bottom-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .border-bottom-color-WHITE {
   *   border-bottom-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_10 {
   *   border-bottom-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_20 {
   *   border-bottom-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_30 {
   *   border-bottom-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_40 {
   *   border-bottom-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_50 {
   *   border-bottom-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_60 {
   *   border-bottom-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_70 {
   *   border-bottom-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_80 {
   *   border-bottom-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .border-bottom-color-GRAY_90 {
   *   border-bottom-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_10 {
   *   border-bottom-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_20 {
   *   border-bottom-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_30 {
   *   border-bottom-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_40 {
   *   border-bottom-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_50 {
   *   border-bottom-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_60 {
   *   border-bottom-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_70 {
   *   border-bottom-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_80 {
   *   border-bottom-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .border-bottom-color-RED_90 {
   *   border-bottom-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_10 {
   *   border-bottom-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_20 {
   *   border-bottom-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_30 {
   *   border-bottom-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_40 {
   *   border-bottom-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_50 {
   *   border-bottom-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_60 {
   *   border-bottom-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_70 {
   *   border-bottom-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_80 {
   *   border-bottom-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .border-bottom-color-ORANGE_90 {
   *   border-bottom-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_10 {
   *   border-bottom-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_20 {
   *   border-bottom-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_30 {
   *   border-bottom-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_40 {
   *   border-bottom-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_50 {
   *   border-bottom-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_60 {
   *   border-bottom-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_70 {
   *   border-bottom-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_80 {
   *   border-bottom-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .border-bottom-color-YELLOW_90 {
   *   border-bottom-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_10 {
   *   border-bottom-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_20 {
   *   border-bottom-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_30 {
   *   border-bottom-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_40 {
   *   border-bottom-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_50 {
   *   border-bottom-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_60 {
   *   border-bottom-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_70 {
   *   border-bottom-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_80 {
   *   border-bottom-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .border-bottom-color-GREEN_90 {
   *   border-bottom-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_10 {
   *   border-bottom-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_20 {
   *   border-bottom-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_30 {
   *   border-bottom-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_40 {
   *   border-bottom-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_50 {
   *   border-bottom-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_60 {
   *   border-bottom-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_70 {
   *   border-bottom-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_80 {
   *   border-bottom-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .border-bottom-color-TEAL_90 {
   *   border-bottom-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_10 {
   *   border-bottom-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_20 {
   *   border-bottom-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_30 {
   *   border-bottom-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_40 {
   *   border-bottom-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_50 {
   *   border-bottom-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_60 {
   *   border-bottom-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_70 {
   *   border-bottom-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_80 {
   *   border-bottom-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .border-bottom-color-BLUE_90 {
   *   border-bottom-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_10 {
   *   border-bottom-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_20 {
   *   border-bottom-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_30 {
   *   border-bottom-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_40 {
   *   border-bottom-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_50 {
   *   border-bottom-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_60 {
   *   border-bottom-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_70 {
   *   border-bottom-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_80 {
   *   border-bottom-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .border-bottom-color-INDIGO_90 {
   *   border-bottom-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_10 {
   *   border-bottom-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_20 {
   *   border-bottom-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_30 {
   *   border-bottom-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_40 {
   *   border-bottom-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_50 {
   *   border-bottom-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_60 {
   *   border-bottom-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_70 {
   *   border-bottom-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_80 {
   *   border-bottom-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .border-bottom-color-PURPLE_90 {
   *   border-bottom-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_10 {
   *   border-bottom-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_20 {
   *   border-bottom-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_30 {
   *   border-bottom-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_40 {
   *   border-bottom-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_50 {
   *   border-bottom-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_60 {
   *   border-bottom-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_70 {
   *   border-bottom-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_80 {
   *   border-bottom-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .border-bottom-color-PINK_90 {
   *   border-bottom-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### border-left-color
The border-left-color CSS property sets the color of an element's left border.
[Mozilla Developer Network: border-left-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color).
    */
    borderLeftColor: {
      
  /**
   
   
   * ```css
   * .border-left-color-TRANSPARENT {
   *   border-left-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .border-left-color-BLACK {
   *   border-left-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .border-left-color-WHITE {
   *   border-left-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_10 {
   *   border-left-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_20 {
   *   border-left-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_30 {
   *   border-left-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_40 {
   *   border-left-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_50 {
   *   border-left-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_60 {
   *   border-left-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_70 {
   *   border-left-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_80 {
   *   border-left-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .border-left-color-GRAY_90 {
   *   border-left-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .border-left-color-RED_10 {
   *   border-left-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .border-left-color-RED_20 {
   *   border-left-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .border-left-color-RED_30 {
   *   border-left-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .border-left-color-RED_40 {
   *   border-left-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .border-left-color-RED_50 {
   *   border-left-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .border-left-color-RED_60 {
   *   border-left-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .border-left-color-RED_70 {
   *   border-left-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .border-left-color-RED_80 {
   *   border-left-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .border-left-color-RED_90 {
   *   border-left-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_10 {
   *   border-left-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_20 {
   *   border-left-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_30 {
   *   border-left-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_40 {
   *   border-left-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_50 {
   *   border-left-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_60 {
   *   border-left-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_70 {
   *   border-left-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_80 {
   *   border-left-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .border-left-color-ORANGE_90 {
   *   border-left-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_10 {
   *   border-left-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_20 {
   *   border-left-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_30 {
   *   border-left-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_40 {
   *   border-left-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_50 {
   *   border-left-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_60 {
   *   border-left-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_70 {
   *   border-left-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_80 {
   *   border-left-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .border-left-color-YELLOW_90 {
   *   border-left-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_10 {
   *   border-left-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_20 {
   *   border-left-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_30 {
   *   border-left-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_40 {
   *   border-left-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_50 {
   *   border-left-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_60 {
   *   border-left-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_70 {
   *   border-left-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_80 {
   *   border-left-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .border-left-color-GREEN_90 {
   *   border-left-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_10 {
   *   border-left-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_20 {
   *   border-left-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_30 {
   *   border-left-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_40 {
   *   border-left-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_50 {
   *   border-left-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_60 {
   *   border-left-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_70 {
   *   border-left-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_80 {
   *   border-left-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .border-left-color-TEAL_90 {
   *   border-left-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_10 {
   *   border-left-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_20 {
   *   border-left-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_30 {
   *   border-left-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_40 {
   *   border-left-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_50 {
   *   border-left-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_60 {
   *   border-left-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_70 {
   *   border-left-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_80 {
   *   border-left-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .border-left-color-BLUE_90 {
   *   border-left-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_10 {
   *   border-left-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_20 {
   *   border-left-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_30 {
   *   border-left-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_40 {
   *   border-left-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_50 {
   *   border-left-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_60 {
   *   border-left-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_70 {
   *   border-left-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_80 {
   *   border-left-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .border-left-color-INDIGO_90 {
   *   border-left-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_10 {
   *   border-left-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_20 {
   *   border-left-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_30 {
   *   border-left-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_40 {
   *   border-left-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_50 {
   *   border-left-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_60 {
   *   border-left-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_70 {
   *   border-left-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_80 {
   *   border-left-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .border-left-color-PURPLE_90 {
   *   border-left-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_10 {
   *   border-left-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_20 {
   *   border-left-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_30 {
   *   border-left-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_40 {
   *   border-left-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_50 {
   *   border-left-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_60 {
   *   border-left-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_70 {
   *   border-left-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_80 {
   *   border-left-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .border-left-color-PINK_90 {
   *   border-left-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### border-width
The border-width shorthand CSS property sets the width of an element's border.
[Mozilla Developer Network: border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width).
    */
    borderWidth: {
      
  /**
   
   
   * ```css
   * .border-width-WIDTH_0 {
   *   border-top-width: 0;
   * }
.border-width-WIDTH_0 {
   *   border-right-width: 0;
   * }
.border-width-WIDTH_0 {
   *   border-bottom-width: 0;
   * }
.border-width-WIDTH_0 {
   *   border-left-width: 0;
   * }
   * ```
   */
  readonly WIDTH_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-width-WIDTH_1 {
   *   border-top-width: 1px;
   * }
.border-width-WIDTH_1 {
   *   border-right-width: 1px;
   * }
.border-width-WIDTH_1 {
   *   border-bottom-width: 1px;
   * }
.border-width-WIDTH_1 {
   *   border-left-width: 1px;
   * }
   * ```
   */
  readonly WIDTH_1: IDecorators;
  

  /**
   
   
   * ```css
   * .border-width-WIDTH_2 {
   *   border-top-width: 2px;
   * }
.border-width-WIDTH_2 {
   *   border-right-width: 2px;
   * }
.border-width-WIDTH_2 {
   *   border-bottom-width: 2px;
   * }
.border-width-WIDTH_2 {
   *   border-left-width: 2px;
   * }
   * ```
   */
  readonly WIDTH_2: IDecorators;
  

  /**
   
   
   * ```css
   * .border-width-WIDTH_4 {
   *   border-top-width: 4px;
   * }
.border-width-WIDTH_4 {
   *   border-right-width: 4px;
   * }
.border-width-WIDTH_4 {
   *   border-bottom-width: 4px;
   * }
.border-width-WIDTH_4 {
   *   border-left-width: 4px;
   * }
   * ```
   */
  readonly WIDTH_4: IDecorators;
  

  /**
   
   
   * ```css
   * .border-width-WIDTH_8 {
   *   border-top-width: 8px;
   * }
.border-width-WIDTH_8 {
   *   border-right-width: 8px;
   * }
.border-width-WIDTH_8 {
   *   border-bottom-width: 8px;
   * }
.border-width-WIDTH_8 {
   *   border-left-width: 8px;
   * }
   * ```
   */
  readonly WIDTH_8: IDecorators;
  
    }
  

    
  /**
    * ### border-top-width
The border-top-width CSS property sets the width of the top border of an element.
[Mozilla Developer Network: border-top-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width).
    */
    borderTopWidth: {
      
  /**
   
   
   * ```css
   * .border-top-width-WIDTH_0 {
   *   border-top-width: 0;
   * }
   * ```
   */
  readonly WIDTH_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-width-WIDTH_1 {
   *   border-top-width: 1px;
   * }
   * ```
   */
  readonly WIDTH_1: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-width-WIDTH_2 {
   *   border-top-width: 2px;
   * }
   * ```
   */
  readonly WIDTH_2: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-width-WIDTH_4 {
   *   border-top-width: 4px;
   * }
   * ```
   */
  readonly WIDTH_4: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-width-WIDTH_8 {
   *   border-top-width: 8px;
   * }
   * ```
   */
  readonly WIDTH_8: IDecorators;
  
    }
  

    
  /**
    * ### border-right-width
The border-right-width CSS property sets the width of the right border of an element.
[Mozilla Developer Network: border-right-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width).
    */
    borderRightWidth: {
      
  /**
   
   
   * ```css
   * .border-right-width-WIDTH_0 {
   *   border-right-width: 0;
   * }
   * ```
   */
  readonly WIDTH_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-width-WIDTH_1 {
   *   border-right-width: 1px;
   * }
   * ```
   */
  readonly WIDTH_1: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-width-WIDTH_2 {
   *   border-right-width: 2px;
   * }
   * ```
   */
  readonly WIDTH_2: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-width-WIDTH_4 {
   *   border-right-width: 4px;
   * }
   * ```
   */
  readonly WIDTH_4: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-width-WIDTH_8 {
   *   border-right-width: 8px;
   * }
   * ```
   */
  readonly WIDTH_8: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-width
The border-bottom-width CSS property sets the width of the bottom border of an element.
[Mozilla Developer Network: border-bottom-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width).
    */
    borderBottomWidth: {
      
  /**
   
   
   * ```css
   * .border-bottom-width-WIDTH_0 {
   *   border-bottom-width: 0;
   * }
   * ```
   */
  readonly WIDTH_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-width-WIDTH_1 {
   *   border-bottom-width: 1px;
   * }
   * ```
   */
  readonly WIDTH_1: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-width-WIDTH_2 {
   *   border-bottom-width: 2px;
   * }
   * ```
   */
  readonly WIDTH_2: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-width-WIDTH_4 {
   *   border-bottom-width: 4px;
   * }
   * ```
   */
  readonly WIDTH_4: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-width-WIDTH_8 {
   *   border-bottom-width: 8px;
   * }
   * ```
   */
  readonly WIDTH_8: IDecorators;
  
    }
  

    
  /**
    * ### border-left-width
The border-left-width CSS property sets the width of the left border of an element.
[Mozilla Developer Network: border-left-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width).
    */
    borderLeftWidth: {
      
  /**
   
   
   * ```css
   * .border-left-width-WIDTH_0 {
   *   border-left-width: 0;
   * }
   * ```
   */
  readonly WIDTH_0: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-width-WIDTH_1 {
   *   border-left-width: 1px;
   * }
   * ```
   */
  readonly WIDTH_1: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-width-WIDTH_2 {
   *   border-left-width: 2px;
   * }
   * ```
   */
  readonly WIDTH_2: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-width-WIDTH_4 {
   *   border-left-width: 4px;
   * }
   * ```
   */
  readonly WIDTH_4: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-width-WIDTH_8 {
   *   border-left-width: 8px;
   * }
   * ```
   */
  readonly WIDTH_8: IDecorators;
  
    }
  

    
  /**
    * ### border-style
The border-style shorthand CSS property sets the line style for all four sides of an element's border.
[Mozilla Developer Network: border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style).
    */
    borderStyle: {
      
  /**
   
   
   * ```css
   * .border-style-SOLID {
   *   border-top-style: solid;
   * }
.border-style-SOLID {
   *   border-right-style: solid;
   * }
.border-style-SOLID {
   *   border-bottom-style: solid;
   * }
.border-style-SOLID {
   *   border-left-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-DASHED {
   *   border-top-style: dashed;
   * }
.border-style-DASHED {
   *   border-right-style: dashed;
   * }
.border-style-DASHED {
   *   border-bottom-style: dashed;
   * }
.border-style-DASHED {
   *   border-left-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-DOTTED {
   *   border-top-style: dotted;
   * }
.border-style-DOTTED {
   *   border-right-style: dotted;
   * }
.border-style-DOTTED {
   *   border-bottom-style: dotted;
   * }
.border-style-DOTTED {
   *   border-left-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-DOUBLE {
   *   border-top-style: double;
   * }
.border-style-DOUBLE {
   *   border-right-style: double;
   * }
.border-style-DOUBLE {
   *   border-bottom-style: double;
   * }
.border-style-DOUBLE {
   *   border-left-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-NONE {
   *   border-top-style: none;
   * }
.border-style-NONE {
   *   border-right-style: none;
   * }
.border-style-NONE {
   *   border-bottom-style: none;
   * }
.border-style-NONE {
   *   border-left-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-top-style
The border-top-style CSS property sets the line style of an element's top border.
[Mozilla Developer Network: border-top-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style).
    */
    borderTopStyle: {
      
  /**
   
   
   * ```css
   * .border-top-style-SOLID {
   *   border-top-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-DASHED {
   *   border-top-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-DOTTED {
   *   border-top-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-DOUBLE {
   *   border-top-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-NONE {
   *   border-top-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-right-style
The border-right-style CSS property sets the line style of an element's right border.
[Mozilla Developer Network: border-right-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style).
    */
    borderRightStyle: {
      
  /**
   
   
   * ```css
   * .border-right-style-SOLID {
   *   border-right-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-DASHED {
   *   border-right-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-DOTTED {
   *   border-right-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-DOUBLE {
   *   border-right-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-NONE {
   *   border-right-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-style
The border-bottom-style CSS property sets the line style of an element's bottom border.
[Mozilla Developer Network: border-bottom-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style).
    */
    borderBottomStyle: {
      
  /**
   
   
   * ```css
   * .border-bottom-style-SOLID {
   *   border-bottom-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-DASHED {
   *   border-bottom-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-DOTTED {
   *   border-bottom-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-DOUBLE {
   *   border-bottom-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-NONE {
   *   border-bottom-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-left-style
The border-left-style CSS property sets the line style of an element's left border.
[Mozilla Developer Network: border-left-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style).
    */
    borderLeftStyle: {
      
  /**
   
   
   * ```css
   * .border-left-style-SOLID {
   *   border-left-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-DASHED {
   *   border-left-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-DOTTED {
   *   border-left-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-DOUBLE {
   *   border-left-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-NONE {
   *   border-left-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-collapse
The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.
[Mozilla Developer Network: border-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse).
    */
    borderCollapse: {
      
  /**
   
   
   * ```css
   * .border-collapse-COLLAPSE {
   *   border-collapse: collapse;
   * }
   * ```
   */
  readonly COLLAPSE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-collapse-SEPARATE {
   *   border-collapse: separate;
   * }
   * ```
   */
  readonly SEPARATE: IDecorators;
  
    }
  

    
  /**
    * ### overflow
The overflow shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context.
[Mozilla Developer Network: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).
    */
    overflow: {
      
  /**
   
   
   * ```css
   * .overflow-AUTO {
   *   overflow-x: auto;
   * }
.overflow-AUTO {
   *   overflow-y: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-HIDDEN {
   *   overflow-x: hidden;
   * }
.overflow-HIDDEN {
   *   overflow-y: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-VISIBLE {
   *   overflow-x: visible;
   * }
.overflow-VISIBLE {
   *   overflow-y: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-SCROLL {
   *   overflow-x: scroll;
   * }
.overflow-SCROLL {
   *   overflow-y: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### overflow-x
The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
[Mozilla Developer Network: overflow-x](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x).
    */
    overflowX: {
      
  /**
   
   
   * ```css
   * .overflow-x-AUTO {
   *   overflow-x: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-x-HIDDEN {
   *   overflow-x: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-x-VISIBLE {
   *   overflow-x: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-x-SCROLL {
   *   overflow-x: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### overflow-y
The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
[Mozilla Developer Network: overflow-y](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y).
    */
    overflowY: {
      
  /**
   
   
   * ```css
   * .overflow-y-AUTO {
   *   overflow-y: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-y-HIDDEN {
   *   overflow-y: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-y-VISIBLE {
   *   overflow-y: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-y-SCROLL {
   *   overflow-y: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### visibility
The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.
[Mozilla Developer Network: visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility).
    */
    visibility: {
      
  /**
   
   
   * ```css
   * .visibility-VISIBLE {
   *   visibility: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .visibility-HIDDEN {
   *   visibility: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  
    }
  

    
  /**
    * ### -webkit-overflow-scrolling
The -webkit-overflow-scrolling CSS property controls whether or not touch devices use momentum-based scrolling for a given element.
[Mozilla Developer Network: -webkit-overflow-scrolling](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling).
    */
    overflowScrolling: {
      
  /**
   
   
   * ```css
   * .overflow-scrolling-TOUCH {
   *   -webkit-overflow-scrolling: touch;
   * }
   * ```
   */
  readonly TOUCH: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-scrolling-AUTO {
   *   -webkit-overflow-scrolling: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### align-items
The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
[Mozilla Developer Network: align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
    */
    alignItems: {
      
  /**
   
   
   * ```css
   * .align-items-STRETCH {
   *   align-items: stretch;
   * }
   * ```
   */
  readonly STRETCH: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-START {
   *   align-items: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-CENTER {
   *   align-items: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-END {
   *   align-items: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-BASELINE {
   *   align-items: baseline;
   * }
   * ```
   */
  readonly BASELINE: IDecorators;
  
    }
  

    
  /**
    * ### flex-direction
The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
[Mozilla Developer Network: flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
    */
    flexDirection: {
      
  /**
   
   
   * ```css
   * .flex-direction-ROW {
   *   flex-direction: row;
   * }
   * ```
   */
  readonly ROW: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-direction-ROW_REVERSE {
   *   flex-direction: row-reverse;
   * }
   * ```
   */
  readonly ROW_REVERSE: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-direction-COLUMN {
   *   flex-direction: column;
   * }
   * ```
   */
  readonly COLUMN: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-direction-COLUMN_REVERSE {
   *   flex-direction: column-reverse;
   * }
   * ```
   */
  readonly COLUMN_REVERSE: IDecorators;
  
    }
  

    
  /**
    * ### flex-wrap
The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
[Mozilla Developer Network: flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
    */
    flexWrap: {
      
  /**
   
   
   * ```css
   * .flex-wrap-NOWRAP {
   *   flex-wrap: nowrap;
   * }
   * ```
   */
  readonly NOWRAP: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-wrap-WRAP {
   *   flex-wrap: wrap;
   * }
   * ```
   */
  readonly WRAP: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-wrap-WRAP_REVERSE {
   *   flex-wrap: wrap-reverse;
   * }
   * ```
   */
  readonly WRAP_REVERSE: IDecorators;
  
    }
  

    
  /**
    * ### flex-basis
The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
[Mozilla Developer Network: flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).
    */
    flexBasis: {
      
  /**
   
   
   * ```css
   * .flex-basis-NONE {
   *   flex-basis: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-FULL {
   *   flex-basis: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SCREEN_WIDTH {
   *   flex-basis: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SCREEN_HEIGHT {
   *   flex-basis: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_10 {
   *   flex-basis: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_20 {
   *   flex-basis: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_30 {
   *   flex-basis: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_40 {
   *   flex-basis: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_50 {
   *   flex-basis: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_60 {
   *   flex-basis: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_70 {
   *   flex-basis: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_80 {
   *   flex-basis: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_90 {
   *   flex-basis: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-SIZE_100 {
   *   flex-basis: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-AUTO {
   *   flex-basis: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-FILL {
   *   flex-basis: fill;
   * }
   * ```
   */
  readonly FILL: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-MAX_CONTENT {
   *   flex-basis: max-content;
   * }
   * ```
   */
  readonly MAX_CONTENT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-MIN_CONTENT {
   *   flex-basis: min-content;
   * }
   * ```
   */
  readonly MIN_CONTENT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-FIT_CONTENT {
   *   flex-basis: fit-content;
   * }
   * ```
   */
  readonly FIT_CONTENT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-CONTENT {
   *   flex-basis: content;
   * }
   * ```
   */
  readonly CONTENT: IDecorators;
  
    }
  

    
  /**
    * ### flex-grow
The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor)
[Mozilla Developer Network: flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).
    */
    flexGrow: {
      
  /**
   
   
   * ```css
   * .flex-grow-FLEX_0 {
   *   flex-grow: 0;
   * }
   * ```
   */
  readonly FLEX_0: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_10 {
   *   flex-grow: 1;
   * }
   * ```
   */
  readonly FLEX_10: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_20 {
   *   flex-grow: 2;
   * }
   * ```
   */
  readonly FLEX_20: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_30 {
   *   flex-grow: 3;
   * }
   * ```
   */
  readonly FLEX_30: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_40 {
   *   flex-grow: 4;
   * }
   * ```
   */
  readonly FLEX_40: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_50 {
   *   flex-grow: 5;
   * }
   * ```
   */
  readonly FLEX_50: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_60 {
   *   flex-grow: 6;
   * }
   * ```
   */
  readonly FLEX_60: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_70 {
   *   flex-grow: 7;
   * }
   * ```
   */
  readonly FLEX_70: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_80 {
   *   flex-grow: 8;
   * }
   * ```
   */
  readonly FLEX_80: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_90 {
   *   flex-grow: 8;
   * }
   * ```
   */
  readonly FLEX_90: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_100 {
   *   flex-grow: 10;
   * }
   * ```
   */
  readonly FLEX_100: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_110 {
   *   flex-grow: 11;
   * }
   * ```
   */
  readonly FLEX_110: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FLEX_120 {
   *   flex-grow: 12;
   * }
   * ```
   */
  readonly FLEX_120: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-NONE {
   *   flex-grow: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-FULL {
   *   flex-grow: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SCREEN_WIDTH {
   *   flex-grow: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SCREEN_HEIGHT {
   *   flex-grow: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_10 {
   *   flex-grow: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_20 {
   *   flex-grow: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_30 {
   *   flex-grow: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_40 {
   *   flex-grow: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_50 {
   *   flex-grow: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_60 {
   *   flex-grow: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_70 {
   *   flex-grow: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_80 {
   *   flex-grow: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_90 {
   *   flex-grow: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-grow-SIZE_100 {
   *   flex-grow: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  
    }
  

    
  /**
    * ### flex-shrink
The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
[Mozilla Developer Network: flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).
    */
    flexShrink: {
      
  /**
   
   
   * ```css
   * .flex-shrink-FLEX_0 {
   *   flex-shrink: 0;
   * }
   * ```
   */
  readonly FLEX_0: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_10 {
   *   flex-shrink: 1;
   * }
   * ```
   */
  readonly FLEX_10: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_20 {
   *   flex-shrink: 2;
   * }
   * ```
   */
  readonly FLEX_20: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_30 {
   *   flex-shrink: 3;
   * }
   * ```
   */
  readonly FLEX_30: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_40 {
   *   flex-shrink: 4;
   * }
   * ```
   */
  readonly FLEX_40: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_50 {
   *   flex-shrink: 5;
   * }
   * ```
   */
  readonly FLEX_50: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_60 {
   *   flex-shrink: 6;
   * }
   * ```
   */
  readonly FLEX_60: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_70 {
   *   flex-shrink: 7;
   * }
   * ```
   */
  readonly FLEX_70: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_80 {
   *   flex-shrink: 8;
   * }
   * ```
   */
  readonly FLEX_80: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_90 {
   *   flex-shrink: 8;
   * }
   * ```
   */
  readonly FLEX_90: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_100 {
   *   flex-shrink: 10;
   * }
   * ```
   */
  readonly FLEX_100: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_110 {
   *   flex-shrink: 11;
   * }
   * ```
   */
  readonly FLEX_110: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FLEX_120 {
   *   flex-shrink: 12;
   * }
   * ```
   */
  readonly FLEX_120: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-NONE {
   *   flex-shrink: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-FULL {
   *   flex-shrink: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SCREEN_WIDTH {
   *   flex-shrink: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SCREEN_HEIGHT {
   *   flex-shrink: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_10 {
   *   flex-shrink: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_20 {
   *   flex-shrink: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_30 {
   *   flex-shrink: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_40 {
   *   flex-shrink: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_50 {
   *   flex-shrink: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_60 {
   *   flex-shrink: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_70 {
   *   flex-shrink: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_80 {
   *   flex-shrink: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_90 {
   *   flex-shrink: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-shrink-SIZE_100 {
   *   flex-shrink: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  
    }
  

    
  /**
    * ### box-shadow
The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
[Mozilla Developer Network: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
    */
    boxShadow: {
      
  /**
   
   
   * ```css
   * .box-shadow-SHADOW_10 {
   *   box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
   * }
   * ```
   */
  readonly SHADOW_10: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_20 {
   *   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
   * }
   * ```
   */
  readonly SHADOW_20: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_30 {
   *   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
   * }
   * ```
   */
  readonly SHADOW_30: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_40 {
   *   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
   * }
   * ```
   */
  readonly SHADOW_40: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_50 {
   *   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
   * }
   * ```
   */
  readonly SHADOW_50: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_60 {
   *   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
   * }
   * ```
   */
  readonly SHADOW_60: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_70 {
   *   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
   * }
   * ```
   */
  readonly SHADOW_70: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_INNER {
   *   box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
   * }
   * ```
   */
  readonly SHADOW_INNER: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_OUTLINE {
   *   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
   * }
   * ```
   */
  readonly SHADOW_OUTLINE: IDecorators;
  

  /**
   
   
   * ```css
   * .box-shadow-SHADOW_NONE {
   *   box-shadow: none;
   * }
   * ```
   */
  readonly SHADOW_NONE: IDecorators;
  
    }
  

    
  /**
    * ### text-shadow
The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
[Mozilla Developer Network: text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow).
    */
    textShadow: {
      
  /**
   
   
   * ```css
   * .text-shadow-SHADOW_10 {
   *   text-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
   * }
   * ```
   */
  readonly SHADOW_10: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_20 {
   *   text-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
   * }
   * ```
   */
  readonly SHADOW_20: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_30 {
   *   text-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
   * }
   * ```
   */
  readonly SHADOW_30: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_40 {
   *   text-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
   * }
   * ```
   */
  readonly SHADOW_40: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_50 {
   *   text-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
   * }
   * ```
   */
  readonly SHADOW_50: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_60 {
   *   text-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
   * }
   * ```
   */
  readonly SHADOW_60: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_70 {
   *   text-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
   * }
   * ```
   */
  readonly SHADOW_70: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_INNER {
   *   text-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
   * }
   * ```
   */
  readonly SHADOW_INNER: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_OUTLINE {
   *   text-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
   * }
   * ```
   */
  readonly SHADOW_OUTLINE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-shadow-SHADOW_NONE {
   *   text-shadow: none;
   * }
   * ```
   */
  readonly SHADOW_NONE: IDecorators;
  
    }
  

    
  /**
    * ### outline
The outline CSS property is a shorthand to set various outline properties in a single declaration: outline-style, outline-width, and outline-color.
[Mozilla Developer Network: outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline).
    */
    outline: {
      
  /**
   
   
   * ```css
   * .outline-NONE {
   *   outline: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### pointer-events
The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
[Mozilla Developer Network: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events).
    */
    pointerEvents: {
      
  /**
   
   
   * ```css
   * .pointer-events-NONE {
   *   pointer-events: none}
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .pointer-events-AUTO {
   *   pointer-events: auto}
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### resize
The resize CSS property sets whether an element is resizable, and if so, in which directions.
[Mozilla Developer Network: resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize).
    */
    resize: {
      
  /**
   
   
   * ```css
   * .resize-BOTH {
   *   resize: both;
   * }
   * ```
   */
  readonly BOTH: IDecorators;
  

  /**
   
   
   * ```css
   * .resize-NONE {
   *   resize: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .resize-VERTICAL {
   *   resize: vertical;
   * }
   * ```
   */
  readonly VERTICAL: IDecorators;
  

  /**
   
   
   * ```css
   * .resize-HORIZONTAL {
   *   resize: horizontal;
   * }
   * ```
   */
  readonly HORIZONTAL: IDecorators;
  
    }
  

    
  /**
    * ### user-select
The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
[Mozilla Developer Network: user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select).
    */
    userSelect: {
      
  /**
   
   
   * ```css
   * .user-select-NONE {
   *   user-select: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .user-select-TEXT {
   *   user-select: text;
   * }
   * ```
   */
  readonly TEXT: IDecorators;
  

  /**
   
   
   * ```css
   * .user-select-ALL {
   *   user-select: all;
   * }
   * ```
   */
  readonly ALL: IDecorators;
  

  /**
   
   
   * ```css
   * .user-select-AUTO {
   *   user-select: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### cursor
The cursor CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.
[Mozilla Developer Network: cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).
    */
    cursor: {
      
  /**
   
   
   * ```css
   * .cursor-AUTO {
   *   cursor: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-DEFAULT {
   *   cursor: default;
   * }
   * ```
   */
  readonly DEFAULT: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-POINTER {
   *   cursor: pointer;
   * }
   * ```
   */
  readonly POINTER: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-WAIT {
   *   cursor: wait;
   * }
   * ```
   */
  readonly WAIT: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-TEXT {
   *   cursor: text;
   * }
   * ```
   */
  readonly TEXT: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-MOVE {
   *   cursor: move;
   * }
   * ```
   */
  readonly MOVE: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-NOT_ALLOWED {
   *   cursor: not-allowed;
   * }
   * ```
   */
  readonly NOT_ALLOWED: IDecorators;
  
    }
  

    
  /**
    * ### fill
The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.
[Mozilla Developer Network: fill](https://developer.mozilla.org/en-US/docs/Web/CSS/fill).
    */
    fill: {
      
  /**
   
   
   * ```css
   * .fill-CURRENT {
   *   fill: currentColor;
   * }
   * ```
   */
  readonly CURRENT: IDecorators;
  
    }
  

    
  /**
    * ### appearance
The appearance CSS property is used to display an element using platform-native styling based on the operating system's theme.
[Mozilla Developer Network: appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance).
    */
    appearance: {
      
  /**
   
   
   * ```css
   * .appearance-NONE {
   *   appearance: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### font-weight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.
[Mozilla Developer Network: font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).
    */
    fontWeight: {
      
  /**
   
   
   * ```css
   * .font-weight-WEIGHT_10 {
   *   font-weight: 100;
   * }
   * ```
   */
  readonly WEIGHT_10: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_20 {
   *   font-weight: 200;
   * }
   * ```
   */
  readonly WEIGHT_20: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_30 {
   *   font-weight: 300;
   * }
   * ```
   */
  readonly WEIGHT_30: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_40 {
   *   font-weight: 400;
   * }
   * ```
   */
  readonly WEIGHT_40: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_50 {
   *   font-weight: 500;
   * }
   * ```
   */
  readonly WEIGHT_50: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_60 {
   *   font-weight: 600;
   * }
   * ```
   */
  readonly WEIGHT_60: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_70 {
   *   font-weight: 700;
   * }
   * ```
   */
  readonly WEIGHT_70: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_80 {
   *   font-weight: 800;
   * }
   * ```
   */
  readonly WEIGHT_80: IDecorators;
  

  /**
   
   
   * ```css
   * .font-weight-WEIGHT_90 {
   *   font-weight: 900;
   * }
   * ```
   */
  readonly WEIGHT_90: IDecorators;
  
    }
  

    
  /**
    * ### font-family
The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
[Mozilla Developer Network: font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family).
    */
    fontFamily: {
      
  /**
   
   
   * ```css
   * .font-family-FONT_SANS {
   *   font-family: Inter, apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   * }
   * ```
   */
  readonly FONT_SANS: IDecorators;
  

  /**
   
   
   * ```css
   * .font-family-FONT_SERIF {
   *   font-family: Georgia,Cambria,"Times New Roman",Times,serif;
   * }
   * ```
   */
  readonly FONT_SERIF: IDecorators;
  

  /**
   
   
   * ```css
   * .font-family-FONT_MONO {
   *   font-family: Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
   * }
   * ```
   */
  readonly FONT_MONO: IDecorators;
  
    }
  

    
  /**
    * ### color
Sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.
[Mozilla Developer Network: color](https://developer.mozilla.org/en-US/docs/Web/CSS/color).
    */
    color: {
      
  /**
   
   
   * ```css
   * .color-TRANSPARENT {
   *   color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .color-BLACK {
   *   color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .color-WHITE {
   *   color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .color-GRAY_10 {
   *   color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .color-GRAY_20 {
   *   color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .color-GRAY_30 {
   *   color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .color-GRAY_40 {
   *   color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .color-GRAY_50 {
   *   color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .color-GRAY_60 {
   *   color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .color-GRAY_70 {
   *   color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .color-GRAY_80 {
   *   color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .color-GRAY_90 {
   *   color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .color-RED_10 {
   *   color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .color-RED_20 {
   *   color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .color-RED_30 {
   *   color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .color-RED_40 {
   *   color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .color-RED_50 {
   *   color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .color-RED_60 {
   *   color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .color-RED_70 {
   *   color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .color-RED_80 {
   *   color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .color-RED_90 {
   *   color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .color-ORANGE_10 {
   *   color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .color-ORANGE_20 {
   *   color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .color-ORANGE_30 {
   *   color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .color-ORANGE_40 {
   *   color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .color-ORANGE_50 {
   *   color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .color-ORANGE_60 {
   *   color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .color-ORANGE_70 {
   *   color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .color-ORANGE_80 {
   *   color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .color-ORANGE_90 {
   *   color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .color-YELLOW_10 {
   *   color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .color-YELLOW_20 {
   *   color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .color-YELLOW_30 {
   *   color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .color-YELLOW_40 {
   *   color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .color-YELLOW_50 {
   *   color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .color-YELLOW_60 {
   *   color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .color-YELLOW_70 {
   *   color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .color-YELLOW_80 {
   *   color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .color-YELLOW_90 {
   *   color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .color-GREEN_10 {
   *   color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .color-GREEN_20 {
   *   color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .color-GREEN_30 {
   *   color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .color-GREEN_40 {
   *   color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .color-GREEN_50 {
   *   color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .color-GREEN_60 {
   *   color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .color-GREEN_70 {
   *   color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .color-GREEN_80 {
   *   color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .color-GREEN_90 {
   *   color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .color-TEAL_10 {
   *   color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .color-TEAL_20 {
   *   color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .color-TEAL_30 {
   *   color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .color-TEAL_40 {
   *   color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .color-TEAL_50 {
   *   color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .color-TEAL_60 {
   *   color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .color-TEAL_70 {
   *   color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .color-TEAL_80 {
   *   color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .color-TEAL_90 {
   *   color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .color-BLUE_10 {
   *   color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .color-BLUE_20 {
   *   color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .color-BLUE_30 {
   *   color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .color-BLUE_40 {
   *   color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .color-BLUE_50 {
   *   color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .color-BLUE_60 {
   *   color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .color-BLUE_70 {
   *   color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .color-BLUE_80 {
   *   color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .color-BLUE_90 {
   *   color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .color-INDIGO_10 {
   *   color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .color-INDIGO_20 {
   *   color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .color-INDIGO_30 {
   *   color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .color-INDIGO_40 {
   *   color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .color-INDIGO_50 {
   *   color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .color-INDIGO_60 {
   *   color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .color-INDIGO_70 {
   *   color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .color-INDIGO_80 {
   *   color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .color-INDIGO_90 {
   *   color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .color-PURPLE_10 {
   *   color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .color-PURPLE_20 {
   *   color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .color-PURPLE_30 {
   *   color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .color-PURPLE_40 {
   *   color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .color-PURPLE_50 {
   *   color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .color-PURPLE_60 {
   *   color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .color-PURPLE_70 {
   *   color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .color-PURPLE_80 {
   *   color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .color-PURPLE_90 {
   *   color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .color-PINK_10 {
   *   color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .color-PINK_20 {
   *   color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .color-PINK_30 {
   *   color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .color-PINK_40 {
   *   color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .color-PINK_50 {
   *   color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .color-PINK_60 {
   *   color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .color-PINK_70 {
   *   color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .color-PINK_80 {
   *   color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .color-PINK_90 {
   *   color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### text-align
The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.
[Mozilla Developer Network: text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).
    */
    textAlign: {
      
  /**
   
   
   * ```css
   * .text-align-LEFT {
   *   text-align: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .text-align-CENTER {
   *   text-align: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .text-align-RIGHT {
   *   text-align: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .text-align-JUSTIFY {
   *   text-align: justify;
   * }
   * ```
   */
  readonly JUSTIFY: IDecorators;
  
    }
  

    
  /**
    * ### font-size
The font-size CSS property sets the size of the font. This property is also used to compute the size of em, ex, and other relative <length> units.
[Mozilla Developer Network: font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
    */
    fontSize: {
      
  /**
   
   
   * ```css
   * .font-size-SIZE_10 {
   *   font-size: 0.75rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_20 {
   *   font-size: 0.875rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_30 {
   *   font-size: 1rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_40 {
   *   font-size: 1.125rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_50 {
   *   font-size: 1.25rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_60 {
   *   font-size: 1.5rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_70 {
   *   font-size: 1.875rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_80 {
   *   font-size: 2.25rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_90 {
   *   font-size: 3rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .font-size-SIZE_100 {
   *   font-size: 4rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-line
The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
[Mozilla Developer Network: text-decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line).
    */
    textDecorationLine: {
      
  /**
   
   
   * ```css
   * .text-decoration-line-UNDERLINE {
   *   text-decoration-line: underline;
   * }
   * ```
   */
  readonly UNDERLINE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-line-LINE_THROUGH {
   *   text-decoration-line: line-through;
   * }
   * ```
   */
  readonly LINE_THROUGH: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-line-NONE {
   *   text-decoration-line: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-color
The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.
[Mozilla Developer Network: text-decoration-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color).
    */
    textDecorationColor: {
      
  /**
   
   
   * ```css
   * .text-decoration-color-TRANSPARENT {
   *   text-decoration-color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLACK {
   *   text-decoration-color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .text-decoration-color-WHITE {
   *   text-decoration-color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_10 {
   *   text-decoration-color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_20 {
   *   text-decoration-color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_30 {
   *   text-decoration-color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_40 {
   *   text-decoration-color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_50 {
   *   text-decoration-color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_60 {
   *   text-decoration-color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_70 {
   *   text-decoration-color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_80 {
   *   text-decoration-color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .text-decoration-color-GRAY_90 {
   *   text-decoration-color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_10 {
   *   text-decoration-color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_20 {
   *   text-decoration-color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_30 {
   *   text-decoration-color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_40 {
   *   text-decoration-color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_50 {
   *   text-decoration-color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_60 {
   *   text-decoration-color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_70 {
   *   text-decoration-color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_80 {
   *   text-decoration-color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .text-decoration-color-RED_90 {
   *   text-decoration-color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_10 {
   *   text-decoration-color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_20 {
   *   text-decoration-color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_30 {
   *   text-decoration-color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_40 {
   *   text-decoration-color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_50 {
   *   text-decoration-color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_60 {
   *   text-decoration-color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_70 {
   *   text-decoration-color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_80 {
   *   text-decoration-color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .text-decoration-color-ORANGE_90 {
   *   text-decoration-color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_10 {
   *   text-decoration-color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_20 {
   *   text-decoration-color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_30 {
   *   text-decoration-color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_40 {
   *   text-decoration-color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_50 {
   *   text-decoration-color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_60 {
   *   text-decoration-color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_70 {
   *   text-decoration-color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_80 {
   *   text-decoration-color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .text-decoration-color-YELLOW_90 {
   *   text-decoration-color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_10 {
   *   text-decoration-color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_20 {
   *   text-decoration-color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_30 {
   *   text-decoration-color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_40 {
   *   text-decoration-color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_50 {
   *   text-decoration-color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_60 {
   *   text-decoration-color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_70 {
   *   text-decoration-color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_80 {
   *   text-decoration-color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .text-decoration-color-GREEN_90 {
   *   text-decoration-color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_10 {
   *   text-decoration-color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_20 {
   *   text-decoration-color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_30 {
   *   text-decoration-color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_40 {
   *   text-decoration-color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_50 {
   *   text-decoration-color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_60 {
   *   text-decoration-color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_70 {
   *   text-decoration-color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_80 {
   *   text-decoration-color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .text-decoration-color-TEAL_90 {
   *   text-decoration-color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_10 {
   *   text-decoration-color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_20 {
   *   text-decoration-color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_30 {
   *   text-decoration-color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_40 {
   *   text-decoration-color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_50 {
   *   text-decoration-color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_60 {
   *   text-decoration-color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_70 {
   *   text-decoration-color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_80 {
   *   text-decoration-color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .text-decoration-color-BLUE_90 {
   *   text-decoration-color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_10 {
   *   text-decoration-color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_20 {
   *   text-decoration-color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_30 {
   *   text-decoration-color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_40 {
   *   text-decoration-color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_50 {
   *   text-decoration-color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_60 {
   *   text-decoration-color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_70 {
   *   text-decoration-color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_80 {
   *   text-decoration-color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .text-decoration-color-INDIGO_90 {
   *   text-decoration-color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_10 {
   *   text-decoration-color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_20 {
   *   text-decoration-color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_30 {
   *   text-decoration-color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_40 {
   *   text-decoration-color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_50 {
   *   text-decoration-color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_60 {
   *   text-decoration-color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_70 {
   *   text-decoration-color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_80 {
   *   text-decoration-color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .text-decoration-color-PURPLE_90 {
   *   text-decoration-color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_10 {
   *   text-decoration-color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_20 {
   *   text-decoration-color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_30 {
   *   text-decoration-color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_40 {
   *   text-decoration-color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_50 {
   *   text-decoration-color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_60 {
   *   text-decoration-color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_70 {
   *   text-decoration-color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_80 {
   *   text-decoration-color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .text-decoration-color-PINK_90 {
   *   text-decoration-color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-style
The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.
[Mozilla Developer Network: text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style).
    */
    textDecorationStyle: {
      
  /**
   
   
   * ```css
   * .text-decoration-style-SOLID {
   *   text-decoration-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-DOUBLE {
   *   text-decoration-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-DOTTED {
   *   text-decoration-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-DASHED {
   *   text-decoration-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-WAVY {
   *   text-decoration-style: wavy;
   * }
   * ```
   */
  readonly WAVY: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-thickness
The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
[Mozilla Developer Network: text-decoration-thickness](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness).
    */
    textDecorationThickness: {
      
  /**
   
   
   * ```css
   * .text-decoration-thickness-WIDTH_0 {
   *   text-decoration-thickness: 0;
   * }
   * ```
   */
  readonly WIDTH_0: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-WIDTH_1 {
   *   text-decoration-thickness: 1px;
   * }
   * ```
   */
  readonly WIDTH_1: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-WIDTH_2 {
   *   text-decoration-thickness: 2px;
   * }
   * ```
   */
  readonly WIDTH_2: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-WIDTH_4 {
   *   text-decoration-thickness: 4px;
   * }
   * ```
   */
  readonly WIDTH_4: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-WIDTH_8 {
   *   text-decoration-thickness: 8px;
   * }
   * ```
   */
  readonly WIDTH_8: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-AUTO {
   *   text-decoration-thickness: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-FROM_FONT {
   *   text-decoration-thickness: from-font;
   * }
   * ```
   */
  readonly FROM_FONT: IDecorators;
  
    }
  

    
  /**
    * ### -webkit-font-smoothing
The font-smooth CSS property controls the application of anti-aliasing when fonts are rendered.
[Mozilla Developer Network: -webkit-font-smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-font-smoothing).
    */
    fontSmoothing: {
      
  /**
   
   
   * ```css
   * .font-smoothing-ANTIALIASED {
   *   -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
   * }
   * ```
   */
  readonly ANTIALIASED: IDecorators;
  

  /**
   
   
   * ```css
   * .font-smoothing-SUBPIXEL_ANTIALIASED {
   *   -webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;
   * }
   * ```
   */
  readonly SUBPIXEL_ANTIALIASED: IDecorators;
  
    }
  

    
  /**
    * ### font-style
The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.
[Mozilla Developer Network: font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).
    */
    fontStyle: {
      
  /**
   
   
   * ```css
   * .font-style-FONT_STYLE_NORMAL {
   *   font-style: normal;
   * }
   * ```
   */
  readonly FONT_STYLE_NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .font-style-FONT_STYLE_ITALIC {
   *   font-style: italic;
   * }
   * ```
   */
  readonly FONT_STYLE_ITALIC: IDecorators;
  

  /**
   
   
   * ```css
   * .font-style-FONT_STYLE_OBLIQUE {
   *   font-style: oblique;
   * }
   * ```
   */
  readonly FONT_STYLE_OBLIQUE: IDecorators;
  
    }
  

    
  /**
    * ### text-transform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
[Mozilla Developer Network: text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform).
    */
    textTransform: {
      
  /**
   
   
   * ```css
   * .text-transform-UPPERCASE {
   *   text-transform: uppercase}
   * ```
   */
  readonly UPPERCASE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-transform-LOWERCASE {
   *   text-transform: lowercase}
   * ```
   */
  readonly LOWERCASE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-transform-CAPITALIZE {
   *   text-transform: capitalize}
   * ```
   */
  readonly CAPITALIZE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-transform-NONE {
   *   text-transform: none}
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### vertical-align
The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.
[Mozilla Developer Network: vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align).
    */
    verticalAlign: {
      
  /**
   
   
   * ```css
   * .vertical-align-BASELINE {
   *   vertical-align: baseline;
   * }
   * ```
   */
  readonly BASELINE: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-TOP {
   *   vertical-align: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-MIDDLE {
   *   vertical-align: middle;
   * }
   * ```
   */
  readonly MIDDLE: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-BOTTOM {
   *   vertical-align: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-SUB {
   *   vertical-align: sub;
   * }
   * ```
   */
  readonly SUB: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-SUPER {
   *   vertical-align: super;
   * }
   * ```
   */
  readonly SUPER: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-TEXT_TOP {
   *   vertical-align: text-top;
   * }
   * ```
   */
  readonly TEXT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-TEXT_BOTTOM {
   *   vertical-align: text-bottom;
   * }
   * ```
   */
  readonly TEXT_BOTTOM: IDecorators;
  
    }
  

    
  /**
    * ### height
The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
[Mozilla Developer Network: height](https://developer.mozilla.org/en-US/docs/Web/CSS/height).
    */
    height: {
      
  /**
   
   
   * ```css
   * .height-NONE {
   *   height: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .height-FULL {
   *   height: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SCREEN_WIDTH {
   *   height: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SCREEN_HEIGHT {
   *   height: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_10 {
   *   height: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_20 {
   *   height: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_30 {
   *   height: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_40 {
   *   height: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_50 {
   *   height: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_60 {
   *   height: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_70 {
   *   height: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_80 {
   *   height: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_90 {
   *   height: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .height-SIZE_100 {
   *   height: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .height-AUTO {
   *   height: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### white-space
The white-space CSS property sets how white space inside an element is handled.
[Mozilla Developer Network: white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space).
    */
    whitespace: {
      
  /**
   
   
   * ```css
   * .whitespace-NORMAL {
   *   white-space: normal;
   * }
   * ```
   */
  readonly NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-NO_WRAP {
   *   white-space: nowrap;
   * }
   * ```
   */
  readonly NO_WRAP: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-PRE {
   *   white-space: pre;
   * }
   * ```
   */
  readonly PRE: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-PRE_LINE {
   *   white-space: pre-line;
   * }
   * ```
   */
  readonly PRE_LINE: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-PRE_WRAP {
   *   white-space: pre-wrap;
   * }
   * ```
   */
  readonly PRE_WRAP: IDecorators;
  
    }
  

    
  /**
    * ### top
The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: top](https://developer.mozilla.org/en-US/docs/Web/CSS/top).
    */
    top: {
      
  /**
   
   
   * ```css
   * .top-AUTO {
   *   top: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_PX {
   *   top: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_0 {
   *   top: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_10 {
   *   top: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_20 {
   *   top: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_30 {
   *   top: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_40 {
   *   top: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_50 {
   *   top: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_60 {
   *   top: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_70 {
   *   top: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_80 {
   *   top: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_90 {
   *   top: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_100 {
   *   top: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_110 {
   *   top: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_120 {
   *   top: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_130 {
   *   top: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_140 {
   *   top: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_150 {
   *   top: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_160 {
   *   top: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_170 {
   *   top: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### overflow-wrap
The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
[Mozilla Developer Network: overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap).
    */
    overflowWrap: {
      
  /**
   
   
   * ```css
   * .overflow-wrap-NORMAL {
   *   overflow-wrap: normal;
   * }
   * ```
   */
  readonly NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-wrap-BREAK_WORD {
   *   overflow-wrap: break-word;
   * }
   * ```
   */
  readonly BREAK_WORD: IDecorators;
  
    }
  

    
  /**
    * ### word-break
The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
[Mozilla Developer Network: word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break).
    */
    wordBreak: {
      
  /**
   
   
   * ```css
   * .word-break-NORMAL {
   *   word-break: normal;
   * }
   * ```
   */
  readonly NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .word-break-BREAK_ALL {
   *   word-break: break-all;
   * }
   * ```
   */
  readonly BREAK_ALL: IDecorators;
  
    }
  

    
  /**
    * ### text-overflow
The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped or display an ellipsis ('…').
[Mozilla Developer Network: text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow).
    */
    textOverflow: {
      
  /**
   
   
   * ```css
   * .text-overflow-CLIP {
   *   text-overflow: clip;white-space: nowrap;overflow: hidden;
   * }
   * ```
   */
  readonly CLIP: IDecorators;
  

  /**
   
   
   * ```css
   * .text-overflow-ELLIPSIS {
   *   text-overflow: ellipsis;white-space: nowrap;overflow: hidden;
   * }
   * ```
   */
  readonly ELLIPSIS: IDecorators;
  
    }
  

    
  /**
    * ### right
The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: right](https://developer.mozilla.org/en-US/docs/Web/CSS/right).
    */
    right: {
      
  /**
   
   
   * ```css
   * .right-AUTO {
   *   right: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_PX {
   *   right: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_0 {
   *   right: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_10 {
   *   right: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_20 {
   *   right: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_30 {
   *   right: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_40 {
   *   right: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_50 {
   *   right: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_60 {
   *   right: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_70 {
   *   right: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_80 {
   *   right: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_90 {
   *   right: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_100 {
   *   right: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_110 {
   *   right: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_120 {
   *   right: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_130 {
   *   right: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_140 {
   *   right: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_150 {
   *   right: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_160 {
   *   right: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_170 {
   *   right: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### left
The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: left](https://developer.mozilla.org/en-US/docs/Web/CSS/left).
    */
    left: {
      
  /**
   
   
   * ```css
   * .left-AUTO {
   *   left: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_PX {
   *   left: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_0 {
   *   left: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_10 {
   *   left: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_20 {
   *   left: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_30 {
   *   left: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_40 {
   *   left: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_50 {
   *   left: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_60 {
   *   left: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_70 {
   *   left: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_80 {
   *   left: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_90 {
   *   left: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_100 {
   *   left: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_110 {
   *   left: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_120 {
   *   left: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_130 {
   *   left: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_140 {
   *   left: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_150 {
   *   left: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_160 {
   *   left: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_170 {
   *   left: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### bottom
The bottom CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom).
    */
    bottom: {
      
  /**
   
   
   * ```css
   * .bottom-AUTO {
   *   bottom: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_PX {
   *   bottom: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_0 {
   *   bottom: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_10 {
   *   bottom: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_20 {
   *   bottom: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_30 {
   *   bottom: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_40 {
   *   bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_50 {
   *   bottom: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_60 {
   *   bottom: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_70 {
   *   bottom: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_80 {
   *   bottom: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_90 {
   *   bottom: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_100 {
   *   bottom: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_110 {
   *   bottom: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_120 {
   *   bottom: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_130 {
   *   bottom: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_140 {
   *   bottom: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_150 {
   *   bottom: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_160 {
   *   bottom: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_170 {
   *   bottom: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### letter-space
The letter-space CSS property sets the space behavior between text characters.
[Mozilla Developer Network: letter-space](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-space).
    */
    letterSpacing: {
      
  /**
   
   
   * ```css
   * .letter-spacing-SPACING_10 {
   *   letter-space: -0.05em;
   * }
   * ```
   */
  readonly SPACING_10: IDecorators;
  

  /**
   
   
   * ```css
   * .letter-spacing-SPACING_20 {
   *   letter-space: -0.025em;
   * }
   * ```
   */
  readonly SPACING_20: IDecorators;
  

  /**
   
   
   * ```css
   * .letter-spacing-SPACING_30 {
   *   letter-space: 0;
   * }
   * ```
   */
  readonly SPACING_30: IDecorators;
  

  /**
   
   
   * ```css
   * .letter-spacing-SPACING_40 {
   *   letter-space: 0.025em;
   * }
   * ```
   */
  readonly SPACING_40: IDecorators;
  

  /**
   
   
   * ```css
   * .letter-spacing-SPACING_50 {
   *   letter-space: 0.05em;
   * }
   * ```
   */
  readonly SPACING_50: IDecorators;
  

  /**
   
   
   * ```css
   * .letter-spacing-SPACING_60 {
   *   letter-space: 0.1em;
   * }
   * ```
   */
  readonly SPACING_60: IDecorators;
  
    }
  

    
  /**
    * ### letter-height
The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
[Mozilla Developer Network: letter-height](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-height).
    */
    lineHeight: {
      
  /**
   
   
   * ```css
   * .line-height-HEIGHT_10 {
   *   line-height: 1;
   * }
   * ```
   */
  readonly HEIGHT_10: IDecorators;
  

  /**
   
   
   * ```css
   * .line-height-HEIGHT_20 {
   *   line-height: 1.25;
   * }
   * ```
   */
  readonly HEIGHT_20: IDecorators;
  

  /**
   
   
   * ```css
   * .line-height-HEIGHT_30 {
   *   line-height: 1.375;
   * }
   * ```
   */
  readonly HEIGHT_30: IDecorators;
  

  /**
   
   
   * ```css
   * .line-height-HEIGHT_40 {
   *   line-height: 1.5;
   * }
   * ```
   */
  readonly HEIGHT_40: IDecorators;
  

  /**
   
   
   * ```css
   * .line-height-HEIGHT_50 {
   *   line-height: 1.625;
   * }
   * ```
   */
  readonly HEIGHT_50: IDecorators;
  

  /**
   
   
   * ```css
   * .line-height-HEIGHT_60 {
   *   line-height: 2;
   * }
   * ```
   */
  readonly HEIGHT_60: IDecorators;
  
    }
  

    
  /**
    * ### list-style-type
The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
[Mozilla Developer Network: list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).
    */
    listStyleType: {
      
  /**
   
   
   * ```css
   * .list-style-type-NONE {
   *   list-style-type: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .list-style-type-DISC {
   *   list-style-type: disc;
   * }
   * ```
   */
  readonly DISC: IDecorators;
  

  /**
   
   
   * ```css
   * .list-style-type-DECIMAL {
   *   list-style-type: decimal;
   * }
   * ```
   */
  readonly DECIMAL: IDecorators;
  
    }
  

    
  /**
    * ### list-style-position
The list-style-position CSS property sets the position of the ::marker relative to a list item.
[Mozilla Developer Network: list-style-position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position).
    */
    listStylePosition: {
      
  /**
   
   
   * ```css
   * .list-style-position-INSIDE {
   *   list-style-position: inside;
   * }
   * ```
   */
  readonly INSIDE: IDecorators;
  

  /**
   
   
   * ```css
   * .list-style-position-OUTSIDE {
   *   list-style-position: outside;
   * }
   * ```
   */
  readonly OUTSIDE: IDecorators;
  
    }
  

    
  /**
    * ### float
The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
[Mozilla Developer Network: float](https://developer.mozilla.org/en-US/docs/Web/CSS/float).
    */
    float: {
      
  /**
   
   
   * ```css
   * .float-RIGHT {
   *   float: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .float-LEFT {
   *   float: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .float-NONE {
   *   float: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### align-content
The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
[Mozilla Developer Network: align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
    */
    alignContent: {
      
  /**
   
   
   * ```css
   * .align-content-START {
   *   align-content: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-CENTER {
   *   align-content: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-END {
   *   align-content: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-BETWEEN {
   *   align-content: space-between;
   * }
   * ```
   */
  readonly BETWEEN: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-AROUND {
   *   align-content: space-around;
   * }
   * ```
   */
  readonly AROUND: IDecorators;
  
    }
  

    
  /**
    * ### align-self
The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
[Mozilla Developer Network: align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).
    */
    alignSelf: {
      
  /**
   
   
   * ```css
   * .align-self-AUTO {
   *   align-self: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-START {
   *   align-self: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-CENTER {
   *   align-self: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-END {
   *   align-self: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-STRETCH {
   *   align-self: stretch;
   * }
   * ```
   */
  readonly STRETCH: IDecorators;
  
    }
  

    
  /**
    * ### justify-content
The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
[Mozilla Developer Network: justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
    */
    justifyContent: {
      
  /**
   
   
   * ```css
   * .justify-content-START {
   *   justify-content: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-CENTER {
   *   justify-content: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-END {
   *   justify-content: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-BETWEEN {
   *   justify-content: space-between;
   * }
   * ```
   */
  readonly BETWEEN: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-AROUND {
   *   justify-content: space-around;
   * }
   * ```
   */
  readonly AROUND: IDecorators;
  
    }
  

    
  /**
    * ### margin
The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.
[Mozilla Developer Network: margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).
    */
    margin: {
      
  /**
   
   
   * ```css
   * .margin-SPACE_PX {
   *   margin-top: 1px;
   * }
.margin-SPACE_PX {
   *   margin-right: 1px;
   * }
.margin-SPACE_PX {
   *   margin-bottom: 1px;
   * }
.margin-SPACE_PX {
   *   margin-left: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_0 {
   *   margin-top: 0;
   * }
.margin-SPACE_0 {
   *   margin-right: 0;
   * }
.margin-SPACE_0 {
   *   margin-bottom: 0;
   * }
.margin-SPACE_0 {
   *   margin-left: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_10 {
   *   margin-top: 0.25rem;
   * }
.margin-SPACE_10 {
   *   margin-right: 0.25rem;
   * }
.margin-SPACE_10 {
   *   margin-bottom: 0.25rem;
   * }
.margin-SPACE_10 {
   *   margin-left: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_20 {
   *   margin-top: 0.5rem;
   * }
.margin-SPACE_20 {
   *   margin-right: 0.5rem;
   * }
.margin-SPACE_20 {
   *   margin-bottom: 0.5rem;
   * }
.margin-SPACE_20 {
   *   margin-left: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_30 {
   *   margin-top: 0.75rem;
   * }
.margin-SPACE_30 {
   *   margin-right: 0.75rem;
   * }
.margin-SPACE_30 {
   *   margin-bottom: 0.75rem;
   * }
.margin-SPACE_30 {
   *   margin-left: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_40 {
   *   margin-top: 1rem;
   * }
.margin-SPACE_40 {
   *   margin-right: 1rem;
   * }
.margin-SPACE_40 {
   *   margin-bottom: 1rem;
   * }
.margin-SPACE_40 {
   *   margin-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_50 {
   *   margin-top: 1.25rem;
   * }
.margin-SPACE_50 {
   *   margin-right: 1.25rem;
   * }
.margin-SPACE_50 {
   *   margin-bottom: 1.25rem;
   * }
.margin-SPACE_50 {
   *   margin-left: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_60 {
   *   margin-top: 1.5rem;
   * }
.margin-SPACE_60 {
   *   margin-right: 1.5rem;
   * }
.margin-SPACE_60 {
   *   margin-bottom: 1.5rem;
   * }
.margin-SPACE_60 {
   *   margin-left: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_70 {
   *   margin-top: 2rem;
   * }
.margin-SPACE_70 {
   *   margin-right: 2rem;
   * }
.margin-SPACE_70 {
   *   margin-bottom: 2rem;
   * }
.margin-SPACE_70 {
   *   margin-left: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_80 {
   *   margin-top: 2.5rem;
   * }
.margin-SPACE_80 {
   *   margin-right: 2.5rem;
   * }
.margin-SPACE_80 {
   *   margin-bottom: 2.5rem;
   * }
.margin-SPACE_80 {
   *   margin-left: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_90 {
   *   margin-top: 3rem;
   * }
.margin-SPACE_90 {
   *   margin-right: 3rem;
   * }
.margin-SPACE_90 {
   *   margin-bottom: 3rem;
   * }
.margin-SPACE_90 {
   *   margin-left: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_100 {
   *   margin-top: 4rem;
   * }
.margin-SPACE_100 {
   *   margin-right: 4rem;
   * }
.margin-SPACE_100 {
   *   margin-bottom: 4rem;
   * }
.margin-SPACE_100 {
   *   margin-left: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_110 {
   *   margin-top: 5rem;
   * }
.margin-SPACE_110 {
   *   margin-right: 5rem;
   * }
.margin-SPACE_110 {
   *   margin-bottom: 5rem;
   * }
.margin-SPACE_110 {
   *   margin-left: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_120 {
   *   margin-top: 6rem;
   * }
.margin-SPACE_120 {
   *   margin-right: 6rem;
   * }
.margin-SPACE_120 {
   *   margin-bottom: 6rem;
   * }
.margin-SPACE_120 {
   *   margin-left: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_130 {
   *   margin-top: 8rem;
   * }
.margin-SPACE_130 {
   *   margin-right: 8rem;
   * }
.margin-SPACE_130 {
   *   margin-bottom: 8rem;
   * }
.margin-SPACE_130 {
   *   margin-left: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_140 {
   *   margin-top: 10rem;
   * }
.margin-SPACE_140 {
   *   margin-right: 10rem;
   * }
.margin-SPACE_140 {
   *   margin-bottom: 10rem;
   * }
.margin-SPACE_140 {
   *   margin-left: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_150 {
   *   margin-top: 12rem;
   * }
.margin-SPACE_150 {
   *   margin-right: 12rem;
   * }
.margin-SPACE_150 {
   *   margin-bottom: 12rem;
   * }
.margin-SPACE_150 {
   *   margin-left: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_160 {
   *   margin-top: 14rem;
   * }
.margin-SPACE_160 {
   *   margin-right: 14rem;
   * }
.margin-SPACE_160 {
   *   margin-bottom: 14rem;
   * }
.margin-SPACE_160 {
   *   margin-left: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-SPACE_170 {
   *   margin-top: 16rem;
   * }
.margin-SPACE_170 {
   *   margin-right: 16rem;
   * }
.margin-SPACE_170 {
   *   margin-bottom: 16rem;
   * }
.margin-SPACE_170 {
   *   margin-left: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_PX {
   *   margin-top: -1px;
   * }
.margin-NEGATIVE_SPACE_PX {
   *   margin-right: -1px;
   * }
.margin-NEGATIVE_SPACE_PX {
   *   margin-bottom: -1px;
   * }
.margin-NEGATIVE_SPACE_PX {
   *   margin-left: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_10 {
   *   margin-top: -0.25rem;
   * }
.margin-NEGATIVE_SPACE_10 {
   *   margin-right: -0.25rem;
   * }
.margin-NEGATIVE_SPACE_10 {
   *   margin-bottom: -0.25rem;
   * }
.margin-NEGATIVE_SPACE_10 {
   *   margin-left: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_20 {
   *   margin-top: -0.5rem;
   * }
.margin-NEGATIVE_SPACE_20 {
   *   margin-right: -0.5rem;
   * }
.margin-NEGATIVE_SPACE_20 {
   *   margin-bottom: -0.5rem;
   * }
.margin-NEGATIVE_SPACE_20 {
   *   margin-left: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_30 {
   *   margin-top: -0.75rem;
   * }
.margin-NEGATIVE_SPACE_30 {
   *   margin-right: -0.75rem;
   * }
.margin-NEGATIVE_SPACE_30 {
   *   margin-bottom: -0.75rem;
   * }
.margin-NEGATIVE_SPACE_30 {
   *   margin-left: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_40 {
   *   margin-top: -1rem;
   * }
.margin-NEGATIVE_SPACE_40 {
   *   margin-right: -1rem;
   * }
.margin-NEGATIVE_SPACE_40 {
   *   margin-bottom: -1rem;
   * }
.margin-NEGATIVE_SPACE_40 {
   *   margin-left: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_50 {
   *   margin-top: -1.25rem;
   * }
.margin-NEGATIVE_SPACE_50 {
   *   margin-right: -1.25rem;
   * }
.margin-NEGATIVE_SPACE_50 {
   *   margin-bottom: -1.25rem;
   * }
.margin-NEGATIVE_SPACE_50 {
   *   margin-left: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_60 {
   *   margin-top: -1.5rem;
   * }
.margin-NEGATIVE_SPACE_60 {
   *   margin-right: -1.5rem;
   * }
.margin-NEGATIVE_SPACE_60 {
   *   margin-bottom: -1.5rem;
   * }
.margin-NEGATIVE_SPACE_60 {
   *   margin-left: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_70 {
   *   margin-top: -2rem;
   * }
.margin-NEGATIVE_SPACE_70 {
   *   margin-right: -2rem;
   * }
.margin-NEGATIVE_SPACE_70 {
   *   margin-bottom: -2rem;
   * }
.margin-NEGATIVE_SPACE_70 {
   *   margin-left: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_80 {
   *   margin-top: -2.5rem;
   * }
.margin-NEGATIVE_SPACE_80 {
   *   margin-right: -2.5rem;
   * }
.margin-NEGATIVE_SPACE_80 {
   *   margin-bottom: -2.5rem;
   * }
.margin-NEGATIVE_SPACE_80 {
   *   margin-left: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_90 {
   *   margin-top: -3rem;
   * }
.margin-NEGATIVE_SPACE_90 {
   *   margin-right: -3rem;
   * }
.margin-NEGATIVE_SPACE_90 {
   *   margin-bottom: -3rem;
   * }
.margin-NEGATIVE_SPACE_90 {
   *   margin-left: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_100 {
   *   margin-top: -4rem;
   * }
.margin-NEGATIVE_SPACE_100 {
   *   margin-right: -4rem;
   * }
.margin-NEGATIVE_SPACE_100 {
   *   margin-bottom: -4rem;
   * }
.margin-NEGATIVE_SPACE_100 {
   *   margin-left: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_110 {
   *   margin-top: -5rem;
   * }
.margin-NEGATIVE_SPACE_110 {
   *   margin-right: -5rem;
   * }
.margin-NEGATIVE_SPACE_110 {
   *   margin-bottom: -5rem;
   * }
.margin-NEGATIVE_SPACE_110 {
   *   margin-left: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_120 {
   *   margin-top: -6rem;
   * }
.margin-NEGATIVE_SPACE_120 {
   *   margin-right: -6rem;
   * }
.margin-NEGATIVE_SPACE_120 {
   *   margin-bottom: -6rem;
   * }
.margin-NEGATIVE_SPACE_120 {
   *   margin-left: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_130 {
   *   margin-top: -8rem;
   * }
.margin-NEGATIVE_SPACE_130 {
   *   margin-right: -8rem;
   * }
.margin-NEGATIVE_SPACE_130 {
   *   margin-bottom: -8rem;
   * }
.margin-NEGATIVE_SPACE_130 {
   *   margin-left: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_140 {
   *   margin-top: -10rem;
   * }
.margin-NEGATIVE_SPACE_140 {
   *   margin-right: -10rem;
   * }
.margin-NEGATIVE_SPACE_140 {
   *   margin-bottom: -10rem;
   * }
.margin-NEGATIVE_SPACE_140 {
   *   margin-left: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_150 {
   *   margin-top: -12rem;
   * }
.margin-NEGATIVE_SPACE_150 {
   *   margin-right: -12rem;
   * }
.margin-NEGATIVE_SPACE_150 {
   *   margin-bottom: -12rem;
   * }
.margin-NEGATIVE_SPACE_150 {
   *   margin-left: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_160 {
   *   margin-top: -14rem;
   * }
.margin-NEGATIVE_SPACE_160 {
   *   margin-right: -14rem;
   * }
.margin-NEGATIVE_SPACE_160 {
   *   margin-bottom: -14rem;
   * }
.margin-NEGATIVE_SPACE_160 {
   *   margin-left: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_170 {
   *   margin-top: -16rem;
   * }
.margin-NEGATIVE_SPACE_170 {
   *   margin-right: -16rem;
   * }
.margin-NEGATIVE_SPACE_170 {
   *   margin-bottom: -16rem;
   * }
.margin-NEGATIVE_SPACE_170 {
   *   margin-left: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-AUTO {
   *   margin-top: auto;;
   * }
.margin-AUTO {
   *   margin-right: auto;;
   * }
.margin-AUTO {
   *   margin-bottom: auto;;
   * }
.margin-AUTO {
   *   margin-left: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-vertical (Classy-UI)
The margin CSS property sets the margin area on vertical sides of an element. It is a shorthand for margin-top and margin-bottom.
null
    */
    marginVertical: {
      
  /**
   
   
   * ```css
   * .margin-vertical-SPACE_PX {
   *   margin-top: 1px;
   * }
.margin-vertical-SPACE_PX {
   *   margin-bottom: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_0 {
   *   margin-top: 0;
   * }
.margin-vertical-SPACE_0 {
   *   margin-bottom: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_10 {
   *   margin-top: 0.25rem;
   * }
.margin-vertical-SPACE_10 {
   *   margin-bottom: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_20 {
   *   margin-top: 0.5rem;
   * }
.margin-vertical-SPACE_20 {
   *   margin-bottom: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_30 {
   *   margin-top: 0.75rem;
   * }
.margin-vertical-SPACE_30 {
   *   margin-bottom: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_40 {
   *   margin-top: 1rem;
   * }
.margin-vertical-SPACE_40 {
   *   margin-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_50 {
   *   margin-top: 1.25rem;
   * }
.margin-vertical-SPACE_50 {
   *   margin-bottom: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_60 {
   *   margin-top: 1.5rem;
   * }
.margin-vertical-SPACE_60 {
   *   margin-bottom: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_70 {
   *   margin-top: 2rem;
   * }
.margin-vertical-SPACE_70 {
   *   margin-bottom: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_80 {
   *   margin-top: 2.5rem;
   * }
.margin-vertical-SPACE_80 {
   *   margin-bottom: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_90 {
   *   margin-top: 3rem;
   * }
.margin-vertical-SPACE_90 {
   *   margin-bottom: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_100 {
   *   margin-top: 4rem;
   * }
.margin-vertical-SPACE_100 {
   *   margin-bottom: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_110 {
   *   margin-top: 5rem;
   * }
.margin-vertical-SPACE_110 {
   *   margin-bottom: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_120 {
   *   margin-top: 6rem;
   * }
.margin-vertical-SPACE_120 {
   *   margin-bottom: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_130 {
   *   margin-top: 8rem;
   * }
.margin-vertical-SPACE_130 {
   *   margin-bottom: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_140 {
   *   margin-top: 10rem;
   * }
.margin-vertical-SPACE_140 {
   *   margin-bottom: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_150 {
   *   margin-top: 12rem;
   * }
.margin-vertical-SPACE_150 {
   *   margin-bottom: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_160 {
   *   margin-top: 14rem;
   * }
.margin-vertical-SPACE_160 {
   *   margin-bottom: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-SPACE_170 {
   *   margin-top: 16rem;
   * }
.margin-vertical-SPACE_170 {
   *   margin-bottom: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_PX {
   *   margin-top: -1px;
   * }
.margin-vertical-NEGATIVE_SPACE_PX {
   *   margin-bottom: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_10 {
   *   margin-top: -0.25rem;
   * }
.margin-vertical-NEGATIVE_SPACE_10 {
   *   margin-bottom: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_20 {
   *   margin-top: -0.5rem;
   * }
.margin-vertical-NEGATIVE_SPACE_20 {
   *   margin-bottom: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_30 {
   *   margin-top: -0.75rem;
   * }
.margin-vertical-NEGATIVE_SPACE_30 {
   *   margin-bottom: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_40 {
   *   margin-top: -1rem;
   * }
.margin-vertical-NEGATIVE_SPACE_40 {
   *   margin-bottom: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_50 {
   *   margin-top: -1.25rem;
   * }
.margin-vertical-NEGATIVE_SPACE_50 {
   *   margin-bottom: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_60 {
   *   margin-top: -1.5rem;
   * }
.margin-vertical-NEGATIVE_SPACE_60 {
   *   margin-bottom: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_70 {
   *   margin-top: -2rem;
   * }
.margin-vertical-NEGATIVE_SPACE_70 {
   *   margin-bottom: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_80 {
   *   margin-top: -2.5rem;
   * }
.margin-vertical-NEGATIVE_SPACE_80 {
   *   margin-bottom: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_90 {
   *   margin-top: -3rem;
   * }
.margin-vertical-NEGATIVE_SPACE_90 {
   *   margin-bottom: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_100 {
   *   margin-top: -4rem;
   * }
.margin-vertical-NEGATIVE_SPACE_100 {
   *   margin-bottom: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_110 {
   *   margin-top: -5rem;
   * }
.margin-vertical-NEGATIVE_SPACE_110 {
   *   margin-bottom: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_120 {
   *   margin-top: -6rem;
   * }
.margin-vertical-NEGATIVE_SPACE_120 {
   *   margin-bottom: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_130 {
   *   margin-top: -8rem;
   * }
.margin-vertical-NEGATIVE_SPACE_130 {
   *   margin-bottom: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_140 {
   *   margin-top: -10rem;
   * }
.margin-vertical-NEGATIVE_SPACE_140 {
   *   margin-bottom: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_150 {
   *   margin-top: -12rem;
   * }
.margin-vertical-NEGATIVE_SPACE_150 {
   *   margin-bottom: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_160 {
   *   margin-top: -14rem;
   * }
.margin-vertical-NEGATIVE_SPACE_160 {
   *   margin-bottom: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_170 {
   *   margin-top: -16rem;
   * }
.margin-vertical-NEGATIVE_SPACE_170 {
   *   margin-bottom: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-AUTO {
   *   margin-top: auto;;
   * }
.margin-vertical-AUTO {
   *   margin-bottom: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-horizontal (Classy-UI)
The margin CSS property sets the margin area on horizontal sides of an element. It is a shorthand for margin-left and margin-right.
null
    */
    marginHorizontal: {
      
  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_PX {
   *   margin-left: 1px;
   * }
.margin-horizontal-SPACE_PX {
   *   margin-right: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_0 {
   *   margin-left: 0;
   * }
.margin-horizontal-SPACE_0 {
   *   margin-right: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_10 {
   *   margin-left: 0.25rem;
   * }
.margin-horizontal-SPACE_10 {
   *   margin-right: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_20 {
   *   margin-left: 0.5rem;
   * }
.margin-horizontal-SPACE_20 {
   *   margin-right: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_30 {
   *   margin-left: 0.75rem;
   * }
.margin-horizontal-SPACE_30 {
   *   margin-right: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_40 {
   *   margin-left: 1rem;
   * }
.margin-horizontal-SPACE_40 {
   *   margin-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_50 {
   *   margin-left: 1.25rem;
   * }
.margin-horizontal-SPACE_50 {
   *   margin-right: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_60 {
   *   margin-left: 1.5rem;
   * }
.margin-horizontal-SPACE_60 {
   *   margin-right: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_70 {
   *   margin-left: 2rem;
   * }
.margin-horizontal-SPACE_70 {
   *   margin-right: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_80 {
   *   margin-left: 2.5rem;
   * }
.margin-horizontal-SPACE_80 {
   *   margin-right: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_90 {
   *   margin-left: 3rem;
   * }
.margin-horizontal-SPACE_90 {
   *   margin-right: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_100 {
   *   margin-left: 4rem;
   * }
.margin-horizontal-SPACE_100 {
   *   margin-right: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_110 {
   *   margin-left: 5rem;
   * }
.margin-horizontal-SPACE_110 {
   *   margin-right: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_120 {
   *   margin-left: 6rem;
   * }
.margin-horizontal-SPACE_120 {
   *   margin-right: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_130 {
   *   margin-left: 8rem;
   * }
.margin-horizontal-SPACE_130 {
   *   margin-right: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_140 {
   *   margin-left: 10rem;
   * }
.margin-horizontal-SPACE_140 {
   *   margin-right: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_150 {
   *   margin-left: 12rem;
   * }
.margin-horizontal-SPACE_150 {
   *   margin-right: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_160 {
   *   margin-left: 14rem;
   * }
.margin-horizontal-SPACE_160 {
   *   margin-right: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_170 {
   *   margin-left: 16rem;
   * }
.margin-horizontal-SPACE_170 {
   *   margin-right: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_PX {
   *   margin-left: -1px;
   * }
.margin-horizontal-NEGATIVE_SPACE_PX {
   *   margin-right: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_10 {
   *   margin-left: -0.25rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_10 {
   *   margin-right: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_20 {
   *   margin-left: -0.5rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_20 {
   *   margin-right: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_30 {
   *   margin-left: -0.75rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_30 {
   *   margin-right: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_40 {
   *   margin-left: -1rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_40 {
   *   margin-right: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_50 {
   *   margin-left: -1.25rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_50 {
   *   margin-right: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_60 {
   *   margin-left: -1.5rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_60 {
   *   margin-right: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_70 {
   *   margin-left: -2rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_70 {
   *   margin-right: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_80 {
   *   margin-left: -2.5rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_80 {
   *   margin-right: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_90 {
   *   margin-left: -3rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_90 {
   *   margin-right: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_100 {
   *   margin-left: -4rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_100 {
   *   margin-right: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_110 {
   *   margin-left: -5rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_110 {
   *   margin-right: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_120 {
   *   margin-left: -6rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_120 {
   *   margin-right: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_130 {
   *   margin-left: -8rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_130 {
   *   margin-right: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_140 {
   *   margin-left: -10rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_140 {
   *   margin-right: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_150 {
   *   margin-left: -12rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_150 {
   *   margin-right: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_160 {
   *   margin-left: -14rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_160 {
   *   margin-right: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_170 {
   *   margin-left: -16rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_170 {
   *   margin-right: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-AUTO {
   *   margin-left: auto;;
   * }
.margin-horizontal-AUTO {
   *   margin-right: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### max-height
The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
[Mozilla Developer Network: max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height).
    */
    maxHeight: {
      
  /**
   
   
   * ```css
   * .max-height-FULL {
   *   max-height: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .max-height-SCREEN {
   *   max-height: 100vh;
   * }
   * ```
   */
  readonly SCREEN: IDecorators;
  
    }
  

    
  /**
    * ### max-width
The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
[Mozilla Developer Network: max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).
    */
    maxWidth: {
      
  /**
   
   
   * ```css
   * .max-width-NONE {
   *   max-width: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-FULL {
   *   max-width: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SCREEN_WIDTH {
   *   max-width: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SCREEN_HEIGHT {
   *   max-width: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_10 {
   *   max-width: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_20 {
   *   max-width: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_30 {
   *   max-width: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_40 {
   *   max-width: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_50 {
   *   max-width: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_60 {
   *   max-width: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_70 {
   *   max-width: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_80 {
   *   max-width: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_90 {
   *   max-width: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-SIZE_100 {
   *   max-width: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-MOBILE {
   *   max-width: 640px;
   * }
   * ```
   */
  readonly MOBILE: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-TABLET {
   *   max-width: 768px;
   * }
   * ```
   */
  readonly TABLET: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-LAPTOP {
   *   max-width: 1024px;
   * }
   * ```
   */
  readonly LAPTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-DESKTOP {
   *   max-width: 1280px;
   * }
   * ```
   */
  readonly DESKTOP: IDecorators;
  
    }
  

    
  /**
    * ### min-height
The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
[Mozilla Developer Network: min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).
    */
    minHeight: {
      
  /**
   
   
   * ```css
   * .min-height-NONE {
   *   min-height: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-FULL {
   *   min-height: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SCREEN_WIDTH {
   *   min-height: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SCREEN_HEIGHT {
   *   min-height: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_10 {
   *   min-height: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_20 {
   *   min-height: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_30 {
   *   min-height: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_40 {
   *   min-height: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_50 {
   *   min-height: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_60 {
   *   min-height: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_70 {
   *   min-height: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_80 {
   *   min-height: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_90 {
   *   min-height: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .min-height-SIZE_100 {
   *   min-height: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  
    }
  

    
  /**
    * ### min-width
The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
[Mozilla Developer Network: min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width).
    */
    minWidth: {
      
  /**
   
   
   * ```css
   * .min-width-NONE {
   *   min-width: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-FULL {
   *   min-width: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SCREEN_WIDTH {
   *   min-width: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SCREEN_HEIGHT {
   *   min-width: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_10 {
   *   min-width: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_20 {
   *   min-width: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_30 {
   *   min-width: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_40 {
   *   min-width: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_50 {
   *   min-width: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_60 {
   *   min-width: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_70 {
   *   min-width: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_80 {
   *   min-width: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_90 {
   *   min-width: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-SIZE_100 {
   *   min-width: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-MOBILE {
   *   min-width: 640px;
   * }
   * ```
   */
  readonly MOBILE: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-TABLET {
   *   min-width: 768px;
   * }
   * ```
   */
  readonly TABLET: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-LAPTOP {
   *   min-width: 1024px;
   * }
   * ```
   */
  readonly LAPTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-DESKTOP {
   *   min-width: 1280px;
   * }
   * ```
   */
  readonly DESKTOP: IDecorators;
  
    }
  

    
  /**
    * ### object-fit
The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
[Mozilla Developer Network: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
    */
    objectFit: {
      
  /**
   
   
   * ```css
   * .object-fit-CONTAIN {
   *   object-fit: contain;
   * }
   * ```
   */
  readonly CONTAIN: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-COVER {
   *   object-fit: cover;
   * }
   * ```
   */
  readonly COVER: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-FILL {
   *   object-fit: fill;
   * }
   * ```
   */
  readonly FILL: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-NONE {
   *   object-fit: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-SCALE_DOWN {
   *   object-fit: scale-down;
   * }
   * ```
   */
  readonly SCALE_DOWN: IDecorators;
  
    }
  

    
  /**
    * ### object-position
The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
[Mozilla Developer Network: object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).
    */
    objectPosition: {
      
  /**
   
   
   * ```css
   * .object-position-BOTTOM {
   *   object-position: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-CENTER {
   *   object-position: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-LEFT {
   *   object-position: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-LEFT_BOTTOM {
   *   object-position: left bottom;
   * }
   * ```
   */
  readonly LEFT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-LEFT_TOP {
   *   object-position: left top;
   * }
   * ```
   */
  readonly LEFT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-RIGHT {
   *   object-position: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-RIGHT_BOTTOM {
   *   object-position: right bottom;
   * }
   * ```
   */
  readonly RIGHT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-RIGHT_TOP {
   *   object-position: right top;
   * }
   * ```
   */
  readonly RIGHT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-TOP {
   *   object-position: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  
    }
  

    
  /**
    * ### opacity
The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
[Mozilla Developer Network: opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity).
    */
    opacity: {
      
  /**
   
   
   * ```css
   * .opacity-OPACITY_0 {
   *   opacity: 0;
   * }
   * ```
   */
  readonly OPACITY_0: IDecorators;
  

  /**
   
   
   * ```css
   * .opacity-OPACITY_25 {
   *   opacity: 0.25;
   * }
   * ```
   */
  readonly OPACITY_25: IDecorators;
  

  /**
   
   
   * ```css
   * .opacity-OPACITY_50 {
   *   opacity: 0.5;
   * }
   * ```
   */
  readonly OPACITY_50: IDecorators;
  

  /**
   
   
   * ```css
   * .opacity-OPACITY_75 {
   *   opacity: 0.75;
   * }
   * ```
   */
  readonly OPACITY_75: IDecorators;
  

  /**
   
   
   * ```css
   * .opacity-OPACITY_FULL {
   *   opacity: 1;
   * }
   * ```
   */
  readonly OPACITY_FULL: IDecorators;
  
    }
  

    
  /**
    * ### order
The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.
[Mozilla Developer Network: order](https://developer.mozilla.org/en-US/docs/Web/CSS/order).
    */
    order: {
      
  /**
   
   
   * ```css
   * .order-FIRST {
   *   order: -9999;
   * }
   * ```
   */
  readonly FIRST: IDecorators;
  

  /**
   
   
   * ```css
   * .order-LAST {
   *   order: 9999;
   * }
   * ```
   */
  readonly LAST: IDecorators;
  

  /**
   
   
   * ```css
   * .order-NONE {
   *   order: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_1 {
   *   order: 1;
   * }
   * ```
   */
  readonly ORDER_1: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_2 {
   *   order: 2;
   * }
   * ```
   */
  readonly ORDER_2: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_3 {
   *   order: 3;
   * }
   * ```
   */
  readonly ORDER_3: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_4 {
   *   order: 4;
   * }
   * ```
   */
  readonly ORDER_4: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_5 {
   *   order: 5;
   * }
   * ```
   */
  readonly ORDER_5: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_6 {
   *   order: 6;
   * }
   * ```
   */
  readonly ORDER_6: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_7 {
   *   order: 7;
   * }
   * ```
   */
  readonly ORDER_7: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_8 {
   *   order: 8;
   * }
   * ```
   */
  readonly ORDER_8: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_9 {
   *   order: 9;
   * }
   * ```
   */
  readonly ORDER_9: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_10 {
   *   order: 10;
   * }
   * ```
   */
  readonly ORDER_10: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_11 {
   *   order: 11;
   * }
   * ```
   */
  readonly ORDER_11: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_12 {
   *   order: 12;
   * }
   * ```
   */
  readonly ORDER_12: IDecorators;
  
    }
  

    
  /**
    * ### padding
The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.
[Mozilla Developer Network: padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).
    */
    padding: {
      
  /**
   
   
   * ```css
   * .padding-SPACE_PX {
   *   padding-top: 1px;
   * }
.padding-SPACE_PX {
   *   padding-right: 1px;
   * }
.padding-SPACE_PX {
   *   padding-bottom: 1px;
   * }
.padding-SPACE_PX {
   *   padding-left: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_0 {
   *   padding-top: 0;
   * }
.padding-SPACE_0 {
   *   padding-right: 0;
   * }
.padding-SPACE_0 {
   *   padding-bottom: 0;
   * }
.padding-SPACE_0 {
   *   padding-left: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_10 {
   *   padding-top: 0.25rem;
   * }
.padding-SPACE_10 {
   *   padding-right: 0.25rem;
   * }
.padding-SPACE_10 {
   *   padding-bottom: 0.25rem;
   * }
.padding-SPACE_10 {
   *   padding-left: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_20 {
   *   padding-top: 0.5rem;
   * }
.padding-SPACE_20 {
   *   padding-right: 0.5rem;
   * }
.padding-SPACE_20 {
   *   padding-bottom: 0.5rem;
   * }
.padding-SPACE_20 {
   *   padding-left: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_30 {
   *   padding-top: 0.75rem;
   * }
.padding-SPACE_30 {
   *   padding-right: 0.75rem;
   * }
.padding-SPACE_30 {
   *   padding-bottom: 0.75rem;
   * }
.padding-SPACE_30 {
   *   padding-left: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_40 {
   *   padding-top: 1rem;
   * }
.padding-SPACE_40 {
   *   padding-right: 1rem;
   * }
.padding-SPACE_40 {
   *   padding-bottom: 1rem;
   * }
.padding-SPACE_40 {
   *   padding-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_50 {
   *   padding-top: 1.25rem;
   * }
.padding-SPACE_50 {
   *   padding-right: 1.25rem;
   * }
.padding-SPACE_50 {
   *   padding-bottom: 1.25rem;
   * }
.padding-SPACE_50 {
   *   padding-left: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_60 {
   *   padding-top: 1.5rem;
   * }
.padding-SPACE_60 {
   *   padding-right: 1.5rem;
   * }
.padding-SPACE_60 {
   *   padding-bottom: 1.5rem;
   * }
.padding-SPACE_60 {
   *   padding-left: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_70 {
   *   padding-top: 2rem;
   * }
.padding-SPACE_70 {
   *   padding-right: 2rem;
   * }
.padding-SPACE_70 {
   *   padding-bottom: 2rem;
   * }
.padding-SPACE_70 {
   *   padding-left: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_80 {
   *   padding-top: 2.5rem;
   * }
.padding-SPACE_80 {
   *   padding-right: 2.5rem;
   * }
.padding-SPACE_80 {
   *   padding-bottom: 2.5rem;
   * }
.padding-SPACE_80 {
   *   padding-left: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_90 {
   *   padding-top: 3rem;
   * }
.padding-SPACE_90 {
   *   padding-right: 3rem;
   * }
.padding-SPACE_90 {
   *   padding-bottom: 3rem;
   * }
.padding-SPACE_90 {
   *   padding-left: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_100 {
   *   padding-top: 4rem;
   * }
.padding-SPACE_100 {
   *   padding-right: 4rem;
   * }
.padding-SPACE_100 {
   *   padding-bottom: 4rem;
   * }
.padding-SPACE_100 {
   *   padding-left: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_110 {
   *   padding-top: 5rem;
   * }
.padding-SPACE_110 {
   *   padding-right: 5rem;
   * }
.padding-SPACE_110 {
   *   padding-bottom: 5rem;
   * }
.padding-SPACE_110 {
   *   padding-left: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_120 {
   *   padding-top: 6rem;
   * }
.padding-SPACE_120 {
   *   padding-right: 6rem;
   * }
.padding-SPACE_120 {
   *   padding-bottom: 6rem;
   * }
.padding-SPACE_120 {
   *   padding-left: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_130 {
   *   padding-top: 8rem;
   * }
.padding-SPACE_130 {
   *   padding-right: 8rem;
   * }
.padding-SPACE_130 {
   *   padding-bottom: 8rem;
   * }
.padding-SPACE_130 {
   *   padding-left: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_140 {
   *   padding-top: 10rem;
   * }
.padding-SPACE_140 {
   *   padding-right: 10rem;
   * }
.padding-SPACE_140 {
   *   padding-bottom: 10rem;
   * }
.padding-SPACE_140 {
   *   padding-left: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_150 {
   *   padding-top: 12rem;
   * }
.padding-SPACE_150 {
   *   padding-right: 12rem;
   * }
.padding-SPACE_150 {
   *   padding-bottom: 12rem;
   * }
.padding-SPACE_150 {
   *   padding-left: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_160 {
   *   padding-top: 14rem;
   * }
.padding-SPACE_160 {
   *   padding-right: 14rem;
   * }
.padding-SPACE_160 {
   *   padding-bottom: 14rem;
   * }
.padding-SPACE_160 {
   *   padding-left: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-SPACE_170 {
   *   padding-top: 16rem;
   * }
.padding-SPACE_170 {
   *   padding-right: 16rem;
   * }
.padding-SPACE_170 {
   *   padding-bottom: 16rem;
   * }
.padding-SPACE_170 {
   *   padding-left: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### padding-vertical (Classy-UI)
The padding CSS property sets the padding area on the vertical sides of an element. It is a shorthand for padding-top and padding-bottom.
null
    */
    paddingVertical: {
      
  /**
   
   
   * ```css
   * .padding-vertical-SPACE_PX {
   *   padding-top: 1px;
   * }
.padding-vertical-SPACE_PX {
   *   padding-bottom: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_0 {
   *   padding-top: 0;
   * }
.padding-vertical-SPACE_0 {
   *   padding-bottom: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_10 {
   *   padding-top: 0.25rem;
   * }
.padding-vertical-SPACE_10 {
   *   padding-bottom: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_20 {
   *   padding-top: 0.5rem;
   * }
.padding-vertical-SPACE_20 {
   *   padding-bottom: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_30 {
   *   padding-top: 0.75rem;
   * }
.padding-vertical-SPACE_30 {
   *   padding-bottom: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_40 {
   *   padding-top: 1rem;
   * }
.padding-vertical-SPACE_40 {
   *   padding-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_50 {
   *   padding-top: 1.25rem;
   * }
.padding-vertical-SPACE_50 {
   *   padding-bottom: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_60 {
   *   padding-top: 1.5rem;
   * }
.padding-vertical-SPACE_60 {
   *   padding-bottom: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_70 {
   *   padding-top: 2rem;
   * }
.padding-vertical-SPACE_70 {
   *   padding-bottom: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_80 {
   *   padding-top: 2.5rem;
   * }
.padding-vertical-SPACE_80 {
   *   padding-bottom: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_90 {
   *   padding-top: 3rem;
   * }
.padding-vertical-SPACE_90 {
   *   padding-bottom: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_100 {
   *   padding-top: 4rem;
   * }
.padding-vertical-SPACE_100 {
   *   padding-bottom: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_110 {
   *   padding-top: 5rem;
   * }
.padding-vertical-SPACE_110 {
   *   padding-bottom: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_120 {
   *   padding-top: 6rem;
   * }
.padding-vertical-SPACE_120 {
   *   padding-bottom: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_130 {
   *   padding-top: 8rem;
   * }
.padding-vertical-SPACE_130 {
   *   padding-bottom: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_140 {
   *   padding-top: 10rem;
   * }
.padding-vertical-SPACE_140 {
   *   padding-bottom: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_150 {
   *   padding-top: 12rem;
   * }
.padding-vertical-SPACE_150 {
   *   padding-bottom: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_160 {
   *   padding-top: 14rem;
   * }
.padding-vertical-SPACE_160 {
   *   padding-bottom: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-vertical-SPACE_170 {
   *   padding-top: 16rem;
   * }
.padding-vertical-SPACE_170 {
   *   padding-bottom: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### padding-horizontal (Classy-UI)
The padding CSS property sets the padding area on the horizontal sides of an element. It is a shorthand for padding-left and padding-right.
null
    */
    paddingHorizontal: {
      
  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_PX {
   *   padding-left: 1px;
   * }
.padding-horizontal-SPACE_PX {
   *   padding-right: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_0 {
   *   padding-left: 0;
   * }
.padding-horizontal-SPACE_0 {
   *   padding-right: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_10 {
   *   padding-left: 0.25rem;
   * }
.padding-horizontal-SPACE_10 {
   *   padding-right: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_20 {
   *   padding-left: 0.5rem;
   * }
.padding-horizontal-SPACE_20 {
   *   padding-right: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_30 {
   *   padding-left: 0.75rem;
   * }
.padding-horizontal-SPACE_30 {
   *   padding-right: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_40 {
   *   padding-left: 1rem;
   * }
.padding-horizontal-SPACE_40 {
   *   padding-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_50 {
   *   padding-left: 1.25rem;
   * }
.padding-horizontal-SPACE_50 {
   *   padding-right: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_60 {
   *   padding-left: 1.5rem;
   * }
.padding-horizontal-SPACE_60 {
   *   padding-right: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_70 {
   *   padding-left: 2rem;
   * }
.padding-horizontal-SPACE_70 {
   *   padding-right: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_80 {
   *   padding-left: 2.5rem;
   * }
.padding-horizontal-SPACE_80 {
   *   padding-right: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_90 {
   *   padding-left: 3rem;
   * }
.padding-horizontal-SPACE_90 {
   *   padding-right: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_100 {
   *   padding-left: 4rem;
   * }
.padding-horizontal-SPACE_100 {
   *   padding-right: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_110 {
   *   padding-left: 5rem;
   * }
.padding-horizontal-SPACE_110 {
   *   padding-right: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_120 {
   *   padding-left: 6rem;
   * }
.padding-horizontal-SPACE_120 {
   *   padding-right: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_130 {
   *   padding-left: 8rem;
   * }
.padding-horizontal-SPACE_130 {
   *   padding-right: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_140 {
   *   padding-left: 10rem;
   * }
.padding-horizontal-SPACE_140 {
   *   padding-right: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_150 {
   *   padding-left: 12rem;
   * }
.padding-horizontal-SPACE_150 {
   *   padding-right: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_160 {
   *   padding-left: 14rem;
   * }
.padding-horizontal-SPACE_160 {
   *   padding-right: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_170 {
   *   padding-left: 16rem;
   * }
.padding-horizontal-SPACE_170 {
   *   padding-right: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### padding-top
The padding-top CSS property sets the height of the padding area on the top of an element.
[Mozilla Developer Network: padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top).
    */
    paddingTop: {
      
  /**
   
   
   * ```css
   * .padding-top-SPACE_PX {
   *   padding-top: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_0 {
   *   padding-top: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_10 {
   *   padding-top: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_20 {
   *   padding-top: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_30 {
   *   padding-top: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_40 {
   *   padding-top: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_50 {
   *   padding-top: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_60 {
   *   padding-top: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_70 {
   *   padding-top: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_80 {
   *   padding-top: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_90 {
   *   padding-top: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_100 {
   *   padding-top: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_110 {
   *   padding-top: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_120 {
   *   padding-top: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_130 {
   *   padding-top: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_140 {
   *   padding-top: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_150 {
   *   padding-top: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_160 {
   *   padding-top: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-top-SPACE_170 {
   *   padding-top: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### padding-right
The padding-right CSS property sets the width of the padding area on the right of an element.
[Mozilla Developer Network: padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right).
    */
    paddingRight: {
      
  /**
   
   
   * ```css
   * .padding-right-SPACE_PX {
   *   padding-right: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_0 {
   *   padding-right: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_10 {
   *   padding-right: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_20 {
   *   padding-right: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_30 {
   *   padding-right: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_40 {
   *   padding-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_50 {
   *   padding-right: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_60 {
   *   padding-right: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_70 {
   *   padding-right: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_80 {
   *   padding-right: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_90 {
   *   padding-right: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_100 {
   *   padding-right: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_110 {
   *   padding-right: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_120 {
   *   padding-right: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_130 {
   *   padding-right: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_140 {
   *   padding-right: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_150 {
   *   padding-right: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_160 {
   *   padding-right: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-right-SPACE_170 {
   *   padding-right: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### padding-bottom
The padding-bottom CSS property sets the height of the padding area on the bottom of an element.
[Mozilla Developer Network: padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom).
    */
    paddingBottom: {
      
  /**
   
   
   * ```css
   * .padding-bottom-SPACE_PX {
   *   padding-bottom: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_0 {
   *   padding-bottom: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_10 {
   *   padding-bottom: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_20 {
   *   padding-bottom: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_30 {
   *   padding-bottom: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_40 {
   *   padding-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_50 {
   *   padding-bottom: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_60 {
   *   padding-bottom: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_70 {
   *   padding-bottom: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_80 {
   *   padding-bottom: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_90 {
   *   padding-bottom: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_100 {
   *   padding-bottom: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_110 {
   *   padding-bottom: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_120 {
   *   padding-bottom: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_130 {
   *   padding-bottom: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_140 {
   *   padding-bottom: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_150 {
   *   padding-bottom: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_160 {
   *   padding-bottom: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-bottom-SPACE_170 {
   *   padding-bottom: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### padding-left
The padding-left CSS property sets the width of the padding area on the left of an element.
[Mozilla Developer Network: padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left).
    */
    paddingLeft: {
      
  /**
   
   
   * ```css
   * .padding-left-SPACE_PX {
   *   padding-left: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_0 {
   *   padding-left: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_10 {
   *   padding-left: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_20 {
   *   padding-left: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_30 {
   *   padding-left: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_40 {
   *   padding-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_50 {
   *   padding-left: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_60 {
   *   padding-left: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_70 {
   *   padding-left: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_80 {
   *   padding-left: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_90 {
   *   padding-left: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_100 {
   *   padding-left: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_110 {
   *   padding-left: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_120 {
   *   padding-left: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_130 {
   *   padding-left: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_140 {
   *   padding-left: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_150 {
   *   padding-left: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_160 {
   *   padding-left: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .padding-left-SPACE_170 {
   *   padding-left: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### margin-top
The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top).
    */
    marginTop: {
      
  /**
   
   
   * ```css
   * .margin-top-SPACE_PX {
   *   margin-top: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_0 {
   *   margin-top: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_10 {
   *   margin-top: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_20 {
   *   margin-top: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_30 {
   *   margin-top: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_40 {
   *   margin-top: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_50 {
   *   margin-top: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_60 {
   *   margin-top: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_70 {
   *   margin-top: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_80 {
   *   margin-top: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_90 {
   *   margin-top: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_100 {
   *   margin-top: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_110 {
   *   margin-top: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_120 {
   *   margin-top: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_130 {
   *   margin-top: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_140 {
   *   margin-top: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_150 {
   *   margin-top: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_160 {
   *   margin-top: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-SPACE_170 {
   *   margin-top: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_PX {
   *   margin-top: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_10 {
   *   margin-top: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_20 {
   *   margin-top: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_30 {
   *   margin-top: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_40 {
   *   margin-top: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_50 {
   *   margin-top: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_60 {
   *   margin-top: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_70 {
   *   margin-top: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_80 {
   *   margin-top: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_90 {
   *   margin-top: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_100 {
   *   margin-top: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_110 {
   *   margin-top: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_120 {
   *   margin-top: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_130 {
   *   margin-top: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_140 {
   *   margin-top: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_150 {
   *   margin-top: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_160 {
   *   margin-top: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_170 {
   *   margin-top: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-AUTO {
   *   margin-top: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-right
The margin-right CSS property sets the margin area on the right of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-right](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right).
    */
    marginRight: {
      
  /**
   
   
   * ```css
   * .margin-right-SPACE_PX {
   *   margin-right: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_0 {
   *   margin-right: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_10 {
   *   margin-right: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_20 {
   *   margin-right: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_30 {
   *   margin-right: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_40 {
   *   margin-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_50 {
   *   margin-right: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_60 {
   *   margin-right: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_70 {
   *   margin-right: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_80 {
   *   margin-right: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_90 {
   *   margin-right: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_100 {
   *   margin-right: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_110 {
   *   margin-right: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_120 {
   *   margin-right: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_130 {
   *   margin-right: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_140 {
   *   margin-right: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_150 {
   *   margin-right: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_160 {
   *   margin-right: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-SPACE_170 {
   *   margin-right: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_PX {
   *   margin-right: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_10 {
   *   margin-right: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_20 {
   *   margin-right: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_30 {
   *   margin-right: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_40 {
   *   margin-right: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_50 {
   *   margin-right: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_60 {
   *   margin-right: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_70 {
   *   margin-right: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_80 {
   *   margin-right: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_90 {
   *   margin-right: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_100 {
   *   margin-right: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_110 {
   *   margin-right: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_120 {
   *   margin-right: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_130 {
   *   margin-right: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_140 {
   *   margin-right: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_150 {
   *   margin-right: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_160 {
   *   margin-right: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_170 {
   *   margin-right: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-AUTO {
   *   margin-right: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-bottom
The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom).
    */
    marginBottom: {
      
  /**
   
   
   * ```css
   * .margin-bottom-SPACE_PX {
   *   margin-bottom: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_0 {
   *   margin-bottom: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_10 {
   *   margin-bottom: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_20 {
   *   margin-bottom: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_30 {
   *   margin-bottom: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_40 {
   *   margin-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_50 {
   *   margin-bottom: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_60 {
   *   margin-bottom: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_70 {
   *   margin-bottom: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_80 {
   *   margin-bottom: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_90 {
   *   margin-bottom: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_100 {
   *   margin-bottom: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_110 {
   *   margin-bottom: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_120 {
   *   margin-bottom: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_130 {
   *   margin-bottom: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_140 {
   *   margin-bottom: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_150 {
   *   margin-bottom: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_160 {
   *   margin-bottom: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-SPACE_170 {
   *   margin-bottom: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_PX {
   *   margin-bottom: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_10 {
   *   margin-bottom: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_20 {
   *   margin-bottom: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_30 {
   *   margin-bottom: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_40 {
   *   margin-bottom: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_50 {
   *   margin-bottom: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_60 {
   *   margin-bottom: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_70 {
   *   margin-bottom: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_80 {
   *   margin-bottom: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_90 {
   *   margin-bottom: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_100 {
   *   margin-bottom: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_110 {
   *   margin-bottom: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_120 {
   *   margin-bottom: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_130 {
   *   margin-bottom: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_140 {
   *   margin-bottom: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_150 {
   *   margin-bottom: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_160 {
   *   margin-bottom: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_170 {
   *   margin-bottom: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-AUTO {
   *   margin-bottom: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### ::placeholder
The ::placeholder CSS pseudo-element represents the placeholder text in an <input> or <textarea> element.
[Mozilla Developer Network: ::placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder).
    */
    placeholder: {
      
  /**
   
   
   * ```css
   * .placeholder-TRANSPARENT::placeholder {
   *   color: transparent;
   * }
   * ```
   */
  readonly TRANSPARENT: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/000/000000?text=+)
   
   * ```css
   * .placeholder-BLACK::placeholder {
   *   color: #000;
   * }
   * ```
   */
  readonly BLACK: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff/000000?text=+)
   
   * ```css
   * .placeholder-WHITE::placeholder {
   *   color: #fff;
   * }
   * ```
   */
  readonly WHITE: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f7fafc/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_10::placeholder {
   *   color: #f7fafc;
   * }
   * ```
   */
  readonly GRAY_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/edf2f7/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_20::placeholder {
   *   color: #edf2f7;
   * }
   * ```
   */
  readonly GRAY_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e2e8f0/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_30::placeholder {
   *   color: #e2e8f0;
   * }
   * ```
   */
  readonly GRAY_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/cbd5e0/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_40::placeholder {
   *   color: #cbd5e0;
   * }
   * ```
   */
  readonly GRAY_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a0aec0/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_50::placeholder {
   *   color: #a0aec0;
   * }
   * ```
   */
  readonly GRAY_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/718096/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_60::placeholder {
   *   color: #718096;
   * }
   * ```
   */
  readonly GRAY_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4a5568/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_70::placeholder {
   *   color: #4a5568;
   * }
   * ```
   */
  readonly GRAY_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2d3748/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_80::placeholder {
   *   color: #2d3748;
   * }
   * ```
   */
  readonly GRAY_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/1a202c/000000?text=+)
   
   * ```css
   * .placeholder-GRAY_90::placeholder {
   *   color: #1a202c;
   * }
   * ```
   */
  readonly GRAY_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f5/000000?text=+)
   
   * ```css
   * .placeholder-RED_10::placeholder {
   *   color: #fff5f5;
   * }
   * ```
   */
  readonly RED_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7d7/000000?text=+)
   
   * ```css
   * .placeholder-RED_20::placeholder {
   *   color: #fed7d7;
   * }
   * ```
   */
  readonly RED_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feb2b2/000000?text=+)
   
   * ```css
   * .placeholder-RED_30::placeholder {
   *   color: #feb2b2;
   * }
   * ```
   */
  readonly RED_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fc8181/000000?text=+)
   
   * ```css
   * .placeholder-RED_40::placeholder {
   *   color: #fc8181;
   * }
   * ```
   */
  readonly RED_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f56565/000000?text=+)
   
   * ```css
   * .placeholder-RED_50::placeholder {
   *   color: #f56565;
   * }
   * ```
   */
  readonly RED_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e53e3e/000000?text=+)
   
   * ```css
   * .placeholder-RED_60::placeholder {
   *   color: #e53e3e;
   * }
   * ```
   */
  readonly RED_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c53030/000000?text=+)
   
   * ```css
   * .placeholder-RED_70::placeholder {
   *   color: #c53030;
   * }
   * ```
   */
  readonly RED_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9b2c2c/000000?text=+)
   
   * ```css
   * .placeholder-RED_80::placeholder {
   *   color: #9b2c2c;
   * }
   * ```
   */
  readonly RED_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/742a2a/000000?text=+)
   
   * ```css
   * .placeholder-RED_90::placeholder {
   *   color: #742a2a;
   * }
   * ```
   */
  readonly RED_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffaf0/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_10::placeholder {
   *   color: #fffaf0;
   * }
   * ```
   */
  readonly ORANGE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/feebc8/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_20::placeholder {
   *   color: #feebc8;
   * }
   * ```
   */
  readonly ORANGE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbd38d/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_30::placeholder {
   *   color: #fbd38d;
   * }
   * ```
   */
  readonly ORANGE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6ad55/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_40::placeholder {
   *   color: #f6ad55;
   * }
   * ```
   */
  readonly ORANGE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed8936/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_50::placeholder {
   *   color: #ed8936;
   * }
   * ```
   */
  readonly ORANGE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/dd6b20/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_60::placeholder {
   *   color: #dd6b20;
   * }
   * ```
   */
  readonly ORANGE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c05621/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_70::placeholder {
   *   color: #c05621;
   * }
   * ```
   */
  readonly ORANGE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9c4221/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_80::placeholder {
   *   color: #9c4221;
   * }
   * ```
   */
  readonly ORANGE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7b341e/000000?text=+)
   
   * ```css
   * .placeholder-ORANGE_90::placeholder {
   *   color: #7b341e;
   * }
   * ```
   */
  readonly ORANGE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fffff0/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_10::placeholder {
   *   color: #fffff0;
   * }
   * ```
   */
  readonly YELLOW_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fefcbf/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_20::placeholder {
   *   color: #fefcbf;
   * }
   * ```
   */
  readonly YELLOW_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf089/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_30::placeholder {
   *   color: #faf089;
   * }
   * ```
   */
  readonly YELLOW_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f6e05e/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_40::placeholder {
   *   color: #f6e05e;
   * }
   * ```
   */
  readonly YELLOW_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ecc94b/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_50::placeholder {
   *   color: #ecc94b;
   * }
   * ```
   */
  readonly YELLOW_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d69e2e/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_60::placeholder {
   *   color: #d69e2e;
   * }
   * ```
   */
  readonly YELLOW_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b7791f/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_70::placeholder {
   *   color: #b7791f;
   * }
   * ```
   */
  readonly YELLOW_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/975a16/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_80::placeholder {
   *   color: #975a16;
   * }
   * ```
   */
  readonly YELLOW_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/744210/000000?text=+)
   
   * ```css
   * .placeholder-YELLOW_90::placeholder {
   *   color: #744210;
   * }
   * ```
   */
  readonly YELLOW_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f0fff4/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_10::placeholder {
   *   color: #f0fff4;
   * }
   * ```
   */
  readonly GREEN_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c6f6d5/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_20::placeholder {
   *   color: #c6f6d5;
   * }
   * ```
   */
  readonly GREEN_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9ae6b4/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_30::placeholder {
   *   color: #9ae6b4;
   * }
   * ```
   */
  readonly GREEN_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/68d391/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_40::placeholder {
   *   color: #68d391;
   * }
   * ```
   */
  readonly GREEN_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/48bb78/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_50::placeholder {
   *   color: #48bb78;
   * }
   * ```
   */
  readonly GREEN_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38a169/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_60::placeholder {
   *   color: #38a169;
   * }
   * ```
   */
  readonly GREEN_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2f855a/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_70::placeholder {
   *   color: #2f855a;
   * }
   * ```
   */
  readonly GREEN_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/276749/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_80::placeholder {
   *   color: #276749;
   * }
   * ```
   */
  readonly GREEN_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/22543d/000000?text=+)
   
   * ```css
   * .placeholder-GREEN_90::placeholder {
   *   color: #22543d;
   * }
   * ```
   */
  readonly GREEN_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e6fffa/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_10::placeholder {
   *   color: #e6fffa;
   * }
   * ```
   */
  readonly TEAL_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b2f5ea/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_20::placeholder {
   *   color: #b2f5ea;
   * }
   * ```
   */
  readonly TEAL_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/81e6d9/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_30::placeholder {
   *   color: #81e6d9;
   * }
   * ```
   */
  readonly TEAL_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4fd1c5/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_40::placeholder {
   *   color: #4fd1c5;
   * }
   * ```
   */
  readonly TEAL_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/38b2ac/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_50::placeholder {
   *   color: #38b2ac;
   * }
   * ```
   */
  readonly TEAL_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/319795/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_60::placeholder {
   *   color: #319795;
   * }
   * ```
   */
  readonly TEAL_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c7a7b/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_70::placeholder {
   *   color: #2c7a7b;
   * }
   * ```
   */
  readonly TEAL_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/285e61/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_80::placeholder {
   *   color: #285e61;
   * }
   * ```
   */
  readonly TEAL_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/234e52/000000?text=+)
   
   * ```css
   * .placeholder-TEAL_90::placeholder {
   *   color: #234e52;
   * }
   * ```
   */
  readonly TEAL_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf8ff/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_10::placeholder {
   *   color: #ebf8ff;
   * }
   * ```
   */
  readonly BLUE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/bee3f8/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_20::placeholder {
   *   color: #bee3f8;
   * }
   * ```
   */
  readonly BLUE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/90cdf4/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_30::placeholder {
   *   color: #90cdf4;
   * }
   * ```
   */
  readonly BLUE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/63b3ed/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_40::placeholder {
   *   color: #63b3ed;
   * }
   * ```
   */
  readonly BLUE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4299e1/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_50::placeholder {
   *   color: #4299e1;
   * }
   * ```
   */
  readonly BLUE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3182ce/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_60::placeholder {
   *   color: #3182ce;
   * }
   * ```
   */
  readonly BLUE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2b6cb0/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_70::placeholder {
   *   color: #2b6cb0;
   * }
   * ```
   */
  readonly BLUE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2c5282/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_80::placeholder {
   *   color: #2c5282;
   * }
   * ```
   */
  readonly BLUE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/2a4365/000000?text=+)
   
   * ```css
   * .placeholder-BLUE_90::placeholder {
   *   color: #2a4365;
   * }
   * ```
   */
  readonly BLUE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ebf4ff/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_10::placeholder {
   *   color: #ebf4ff;
   * }
   * ```
   */
  readonly INDIGO_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/c3dafe/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_20::placeholder {
   *   color: #c3dafe;
   * }
   * ```
   */
  readonly INDIGO_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/a3bffa/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_30::placeholder {
   *   color: #a3bffa;
   * }
   * ```
   */
  readonly INDIGO_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/7f9cf5/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_40::placeholder {
   *   color: #7f9cf5;
   * }
   * ```
   */
  readonly INDIGO_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/667eea/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_50::placeholder {
   *   color: #667eea;
   * }
   * ```
   */
  readonly INDIGO_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/5a67d8/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_60::placeholder {
   *   color: #5a67d8;
   * }
   * ```
   */
  readonly INDIGO_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/4c51bf/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_70::placeholder {
   *   color: #4c51bf;
   * }
   * ```
   */
  readonly INDIGO_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/434190/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_80::placeholder {
   *   color: #434190;
   * }
   * ```
   */
  readonly INDIGO_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/3c366b/000000?text=+)
   
   * ```css
   * .placeholder-INDIGO_90::placeholder {
   *   color: #3c366b;
   * }
   * ```
   */
  readonly INDIGO_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/faf5ff/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_10::placeholder {
   *   color: #faf5ff;
   * }
   * ```
   */
  readonly PURPLE_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/e9d8fd/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_20::placeholder {
   *   color: #e9d8fd;
   * }
   * ```
   */
  readonly PURPLE_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d6bcfa/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_30::placeholder {
   *   color: #d6bcfa;
   * }
   * ```
   */
  readonly PURPLE_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b794f4/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_40::placeholder {
   *   color: #b794f4;
   * }
   * ```
   */
  readonly PURPLE_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/9f7aea/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_50::placeholder {
   *   color: #9f7aea;
   * }
   * ```
   */
  readonly PURPLE_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/805ad5/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_60::placeholder {
   *   color: #805ad5;
   * }
   * ```
   */
  readonly PURPLE_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/6b46c1/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_70::placeholder {
   *   color: #6b46c1;
   * }
   * ```
   */
  readonly PURPLE_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/553c9a/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_80::placeholder {
   *   color: #553c9a;
   * }
   * ```
   */
  readonly PURPLE_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/44337a/000000?text=+)
   
   * ```css
   * .placeholder-PURPLE_90::placeholder {
   *   color: #44337a;
   * }
   * ```
   */
  readonly PURPLE_90: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fff5f7/000000?text=+)
   
   * ```css
   * .placeholder-PINK_10::placeholder {
   *   color: #fff5f7;
   * }
   * ```
   */
  readonly PINK_10: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fed7e2/000000?text=+)
   
   * ```css
   * .placeholder-PINK_20::placeholder {
   *   color: #fed7e2;
   * }
   * ```
   */
  readonly PINK_20: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/fbb6ce/000000?text=+)
   
   * ```css
   * .placeholder-PINK_30::placeholder {
   *   color: #fbb6ce;
   * }
   * ```
   */
  readonly PINK_30: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/f687b3/000000?text=+)
   
   * ```css
   * .placeholder-PINK_40::placeholder {
   *   color: #f687b3;
   * }
   * ```
   */
  readonly PINK_40: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/ed64a6/000000?text=+)
   
   * ```css
   * .placeholder-PINK_50::placeholder {
   *   color: #ed64a6;
   * }
   * ```
   */
  readonly PINK_50: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/d53f8c/000000?text=+)
   
   * ```css
   * .placeholder-PINK_60::placeholder {
   *   color: #d53f8c;
   * }
   * ```
   */
  readonly PINK_60: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/b83280/000000?text=+)
   
   * ```css
   * .placeholder-PINK_70::placeholder {
   *   color: #b83280;
   * }
   * ```
   */
  readonly PINK_70: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/97266d/000000?text=+)
   
   * ```css
   * .placeholder-PINK_80::placeholder {
   *   color: #97266d;
   * }
   * ```
   */
  readonly PINK_80: IDecorators;
  

  /**
   * ![[object Object]](https://placehold.it/15/702459/000000?text=+)
   
   * ```css
   * .placeholder-PINK_90::placeholder {
   *   color: #702459;
   * }
   * ```
   */
  readonly PINK_90: IDecorators;
  
    }
  

    
  /**
    * ### margin-left
The margin-left CSS property sets the margin area on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left).
    */
    marginLeft: {
      
  /**
   
   
   * ```css
   * .margin-left-SPACE_PX {
   *   margin-left: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_0 {
   *   margin-left: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_10 {
   *   margin-left: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_20 {
   *   margin-left: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_30 {
   *   margin-left: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_40 {
   *   margin-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_50 {
   *   margin-left: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_60 {
   *   margin-left: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_70 {
   *   margin-left: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_80 {
   *   margin-left: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_90 {
   *   margin-left: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_100 {
   *   margin-left: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_110 {
   *   margin-left: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_120 {
   *   margin-left: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_130 {
   *   margin-left: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_140 {
   *   margin-left: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_150 {
   *   margin-left: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_160 {
   *   margin-left: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-SPACE_170 {
   *   margin-left: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_PX {
   *   margin-left: -1px;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_10 {
   *   margin-left: -0.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_20 {
   *   margin-left: -0.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_30 {
   *   margin-left: -0.75rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_40 {
   *   margin-left: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_50 {
   *   margin-left: -1.25rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_60 {
   *   margin-left: -1.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_70 {
   *   margin-left: -2rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_80 {
   *   margin-left: -2.5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_90 {
   *   margin-left: -3rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_100 {
   *   margin-left: -4rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_110 {
   *   margin-left: -5rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_120 {
   *   margin-left: -6rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_130 {
   *   margin-left: -8rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_140 {
   *   margin-left: -10rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_150 {
   *   margin-left: -12rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_160 {
   *   margin-left: -14rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_170 {
   *   margin-left: -16rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-AUTO {
   *   margin-left: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### stroke
The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.
[Mozilla Developer Network: stroke](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke).
    */
    stroke: {
      
  /**
   
   
   * ```css
   * .stroke-CURRENT {
   *   stroke: currentColor;
   * }
   * ```
   */
  readonly CURRENT: IDecorators;
  
    }
  

    
  /**
    * ### width
The width attribute defines the horizontal length of an element in the user coordinate system.
[Mozilla Developer Network: width](https://developer.mozilla.org/en-US/docs/Web/CSS/width).
    */
    width: {
      
  /**
   
   
   * ```css
   * .width-auto {
   *   width: auto;
   * }
   * ```
   */
  readonly auto: IDecorators;
  

  /**
   
   
   * ```css
   * .width-NONE {
   *   width: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .width-FULL {
   *   width: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SCREEN_WIDTH {
   *   width: 100vw;
   * }
   * ```
   */
  readonly SCREEN_WIDTH: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SCREEN_HEIGHT {
   *   width: 100vh;
   * }
   * ```
   */
  readonly SCREEN_HEIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_10 {
   *   width: 20rem;
   * }
   * ```
   */
  readonly SIZE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_20 {
   *   width: 24rem;
   * }
   * ```
   */
  readonly SIZE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_30 {
   *   width: 28rem;
   * }
   * ```
   */
  readonly SIZE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_40 {
   *   width: 32rem;
   * }
   * ```
   */
  readonly SIZE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_50 {
   *   width: 36rem;
   * }
   * ```
   */
  readonly SIZE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_60 {
   *   width: 42rem;
   * }
   * ```
   */
  readonly SIZE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_70 {
   *   width: 48rem;
   * }
   * ```
   */
  readonly SIZE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_80 {
   *   width: 56rem;
   * }
   * ```
   */
  readonly SIZE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_90 {
   *   width: 64rem;
   * }
   * ```
   */
  readonly SIZE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SIZE_100 {
   *   width: 72rem;
   * }
   * ```
   */
  readonly SIZE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .width-MOBILE {
   *   width: 640px;
   * }
   * ```
   */
  readonly MOBILE: IDecorators;
  

  /**
   
   
   * ```css
   * .width-TABLET {
   *   width: 768px;
   * }
   * ```
   */
  readonly TABLET: IDecorators;
  

  /**
   
   
   * ```css
   * .width-LAPTOP {
   *   width: 1024px;
   * }
   * ```
   */
  readonly LAPTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .width-DESKTOP {
   *   width: 1280px;
   * }
   * ```
   */
  readonly DESKTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_2 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_1_2: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_3 {
   *   width: 33.333333%;
   * }
   * ```
   */
  readonly SPAN_1_3: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_3 {
   *   width: 66.666667%;
   * }
   * ```
   */
  readonly SPAN_2_3: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_4 {
   *   width: 25%;
   * }
   * ```
   */
  readonly SPAN_1_4: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_4 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_2_4: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_4 {
   *   width: 75%;
   * }
   * ```
   */
  readonly SPAN_3_4: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_5 {
   *   width: 20%;
   * }
   * ```
   */
  readonly SPAN_1_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_5 {
   *   width: 40%;
   * }
   * ```
   */
  readonly SPAN_2_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_5 {
   *   width: 60%;
   * }
   * ```
   */
  readonly SPAN_3_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_4_5 {
   *   width: 80%;
   * }
   * ```
   */
  readonly SPAN_4_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_6 {
   *   width: 16.666667%;
   * }
   * ```
   */
  readonly SPAN_1_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_6 {
   *   width: 33.333333%;
   * }
   * ```
   */
  readonly SPAN_2_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_6 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_3_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_4_6 {
   *   width: 66.666667%;
   * }
   * ```
   */
  readonly SPAN_4_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_5_6 {
   *   width: 83.333333%;
   * }
   * ```
   */
  readonly SPAN_5_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_12 {
   *   width: 8.333333%;
   * }
   * ```
   */
  readonly SPAN_1_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_12 {
   *   width: 16.666667%;
   * }
   * ```
   */
  readonly SPAN_2_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_12 {
   *   width: 25%;
   * }
   * ```
   */
  readonly SPAN_3_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_4_12 {
   *   width: 33.333333%;
   * }
   * ```
   */
  readonly SPAN_4_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_5_12 {
   *   width: 41.666667%;
   * }
   * ```
   */
  readonly SPAN_5_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_6_12 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_6_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_7_12 {
   *   width: 58.333333%;
   * }
   * ```
   */
  readonly SPAN_7_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_8_12 {
   *   width: 66.666667%;
   * }
   * ```
   */
  readonly SPAN_8_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_9_12 {
   *   width: 75%;
   * }
   * ```
   */
  readonly SPAN_9_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_10_12 {
   *   width: 83.333333%;
   * }
   * ```
   */
  readonly SPAN_10_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_11_12 {
   *   width: 91.666667%;
   * }
   * ```
   */
  readonly SPAN_11_12: IDecorators;
  
    }
  

    
  /**
    * ### z-index
The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
[Mozilla Developer Network: z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index).
    */
    zIndex: {
      
  /**
   
   
   * ```css
   * .z-index-Z_0 {
   *   z-index: 0;
   * }
   * ```
   */
  readonly Z_0: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_1 {
   *   z-index: 1;
   * }
   * ```
   */
  readonly Z_1: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_2 {
   *   z-index: 2;
   * }
   * ```
   */
  readonly Z_2: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_3 {
   *   z-index: 3;
   * }
   * ```
   */
  readonly Z_3: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_4 {
   *   z-index: 4;
   * }
   * ```
   */
  readonly Z_4: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_5 {
   *   z-index: 5;
   * }
   * ```
   */
  readonly Z_5: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_6 {
   *   z-index: 6;
   * }
   * ```
   */
  readonly Z_6: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_7 {
   *   z-index: 7;
   * }
   * ```
   */
  readonly Z_7: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_8 {
   *   z-index: 8;
   * }
   * ```
   */
  readonly Z_8: IDecorators;
  

  /**
   
   
   * ```css
   * .z-index-Z_9 {
   *   z-index: 9;
   * }
   * ```
   */
  readonly Z_9: IDecorators;
  
    }
  

    
  /**
    * ### gap
The grid-gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
[Mozilla Developer Network: gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
    */
    gridGap: {
      
  /**
   
   
   * ```css
   * .grid-gap-SPACE_PX {
   *   grid-row-gap: 1px;
   * }
.grid-gap-SPACE_PX {
   *   grid-column-gap: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_0 {
   *   grid-row-gap: 0;
   * }
.grid-gap-SPACE_0 {
   *   grid-column-gap: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_10 {
   *   grid-row-gap: 0.25rem;
   * }
.grid-gap-SPACE_10 {
   *   grid-column-gap: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_20 {
   *   grid-row-gap: 0.5rem;
   * }
.grid-gap-SPACE_20 {
   *   grid-column-gap: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_30 {
   *   grid-row-gap: 0.75rem;
   * }
.grid-gap-SPACE_30 {
   *   grid-column-gap: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_40 {
   *   grid-row-gap: 1rem;
   * }
.grid-gap-SPACE_40 {
   *   grid-column-gap: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_50 {
   *   grid-row-gap: 1.25rem;
   * }
.grid-gap-SPACE_50 {
   *   grid-column-gap: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_60 {
   *   grid-row-gap: 1.5rem;
   * }
.grid-gap-SPACE_60 {
   *   grid-column-gap: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_70 {
   *   grid-row-gap: 2rem;
   * }
.grid-gap-SPACE_70 {
   *   grid-column-gap: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_80 {
   *   grid-row-gap: 2.5rem;
   * }
.grid-gap-SPACE_80 {
   *   grid-column-gap: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_90 {
   *   grid-row-gap: 3rem;
   * }
.grid-gap-SPACE_90 {
   *   grid-column-gap: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_100 {
   *   grid-row-gap: 4rem;
   * }
.grid-gap-SPACE_100 {
   *   grid-column-gap: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_110 {
   *   grid-row-gap: 5rem;
   * }
.grid-gap-SPACE_110 {
   *   grid-column-gap: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_120 {
   *   grid-row-gap: 6rem;
   * }
.grid-gap-SPACE_120 {
   *   grid-column-gap: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_130 {
   *   grid-row-gap: 8rem;
   * }
.grid-gap-SPACE_130 {
   *   grid-column-gap: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_140 {
   *   grid-row-gap: 10rem;
   * }
.grid-gap-SPACE_140 {
   *   grid-column-gap: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_150 {
   *   grid-row-gap: 12rem;
   * }
.grid-gap-SPACE_150 {
   *   grid-column-gap: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_160 {
   *   grid-row-gap: 14rem;
   * }
.grid-gap-SPACE_160 {
   *   grid-column-gap: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-gap-SPACE_170 {
   *   grid-row-gap: 16rem;
   * }
.grid-gap-SPACE_170 {
   *   grid-column-gap: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### grid-row-gap
The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.
[Mozilla Developer Network: grid-row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap).
    */
    gridRowGap: {
      
  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_PX {
   *   grid-row-gap: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_0 {
   *   grid-row-gap: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_10 {
   *   grid-row-gap: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_20 {
   *   grid-row-gap: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_30 {
   *   grid-row-gap: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_40 {
   *   grid-row-gap: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_50 {
   *   grid-row-gap: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_60 {
   *   grid-row-gap: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_70 {
   *   grid-row-gap: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_80 {
   *   grid-row-gap: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_90 {
   *   grid-row-gap: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_100 {
   *   grid-row-gap: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_110 {
   *   grid-row-gap: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_120 {
   *   grid-row-gap: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_130 {
   *   grid-row-gap: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_140 {
   *   grid-row-gap: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_150 {
   *   grid-row-gap: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_160 {
   *   grid-row-gap: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_170 {
   *   grid-row-gap: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### grid-column-gap
The column-gap CSS property sets the size of the gap (gutter) between an element's grid columns.
[Mozilla Developer Network: grid-column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap).
    */
    gridColumnGap: {
      
  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_PX {
   *   grid-column-gap: 1px;
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_0 {
   *   grid-column-gap: 0;
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_10 {
   *   grid-column-gap: 0.25rem;
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_20 {
   *   grid-column-gap: 0.5rem;
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_30 {
   *   grid-column-gap: 0.75rem;
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_40 {
   *   grid-column-gap: 1rem;
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_50 {
   *   grid-column-gap: 1.25rem;
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_60 {
   *   grid-column-gap: 1.5rem;
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_70 {
   *   grid-column-gap: 2rem;
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_80 {
   *   grid-column-gap: 2.5rem;
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_90 {
   *   grid-column-gap: 3rem;
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_100 {
   *   grid-column-gap: 4rem;
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_110 {
   *   grid-column-gap: 5rem;
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_120 {
   *   grid-column-gap: 6rem;
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_130 {
   *   grid-column-gap: 8rem;
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_140 {
   *   grid-column-gap: 10rem;
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_150 {
   *   grid-column-gap: 12rem;
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_160 {
   *   grid-column-gap: 14rem;
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_170 {
   *   grid-column-gap: 16rem;
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  
    }
  

    
  /**
    * ### grid-template-columns
The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
[Mozilla Developer Network: grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).
    */
    gridTemplateColumns: {
      
  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_NONE {
   *   grid-template-columns: none;
   * }
   * ```
   */
  readonly COLUMNS_NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_1 {
   *   grid-template-columns: repeat(1, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_1: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_2 {
   *   grid-template-columns: repeat(2, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_2: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_3 {
   *   grid-template-columns: repeat(3, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_3: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_4 {
   *   grid-template-columns: repeat(4, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_4: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_5 {
   *   grid-template-columns: repeat(5, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_5: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_6 {
   *   grid-template-columns: repeat(6, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_6: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_7 {
   *   grid-template-columns: repeat(7, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_7: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_8 {
   *   grid-template-columns: repeat(8, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_8: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_9 {
   *   grid-template-columns: repeat(9, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_9: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_10 {
   *   grid-template-columns: repeat(10, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_11 {
   *   grid-template-columns: repeat(11, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_11: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-template-columns-COLUMNS_12 {
   *   grid-template-columns: repeat(12, minmax(0, 1fr));
   * }
   * ```
   */
  readonly COLUMNS_12: IDecorators;
  
    }
  

    
  /**
    * ### grid-column
The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
[Mozilla Developer Network: grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).
    */
    gridColumn: {
      
  /**
   
   
   * ```css
   * .grid-column-AUTO {
   *   grid-column-start: auto;
   * }
.grid-column-AUTO {
   *   grid-column-end: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_1 {
   *   grid-column-start: span 1;
   * }
.grid-column-SPAN_1 {
   *   grid-column-end: span 1;
   * }
   * ```
   */
  readonly SPAN_1: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_2 {
   *   grid-column-start: span 2;
   * }
.grid-column-SPAN_2 {
   *   grid-column-end: span 2;
   * }
   * ```
   */
  readonly SPAN_2: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_3 {
   *   grid-column-start: span 3;
   * }
.grid-column-SPAN_3 {
   *   grid-column-end: span 3;
   * }
   * ```
   */
  readonly SPAN_3: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_4 {
   *   grid-column-start: span 4;
   * }
.grid-column-SPAN_4 {
   *   grid-column-end: span 4;
   * }
   * ```
   */
  readonly SPAN_4: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_5 {
   *   grid-column-start: span 5;
   * }
.grid-column-SPAN_5 {
   *   grid-column-end: span 5;
   * }
   * ```
   */
  readonly SPAN_5: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_6 {
   *   grid-column-start: span 6;
   * }
.grid-column-SPAN_6 {
   *   grid-column-end: span 6;
   * }
   * ```
   */
  readonly SPAN_6: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_7 {
   *   grid-column-start: span 7;
   * }
.grid-column-SPAN_7 {
   *   grid-column-end: span 7;
   * }
   * ```
   */
  readonly SPAN_7: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_8 {
   *   grid-column-start: span 8;
   * }
.grid-column-SPAN_8 {
   *   grid-column-end: span 8;
   * }
   * ```
   */
  readonly SPAN_8: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_9 {
   *   grid-column-start: span 9;
   * }
.grid-column-SPAN_9 {
   *   grid-column-end: span 9;
   * }
   * ```
   */
  readonly SPAN_9: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_10 {
   *   grid-column-start: span 10;
   * }
.grid-column-SPAN_10 {
   *   grid-column-end: span 10;
   * }
   * ```
   */
  readonly SPAN_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_11 {
   *   grid-column-start: span 11;
   * }
.grid-column-SPAN_11 {
   *   grid-column-end: span 11;
   * }
   * ```
   */
  readonly SPAN_11: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-SPAN_12 {
   *   grid-column-start: span 12;
   * }
.grid-column-SPAN_12 {
   *   grid-column-end: span 12;
   * }
   * ```
   */
  readonly SPAN_12: IDecorators;
  
    }
  

    
  /**
    * ### grid-column-start
The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
[Mozilla Developer Network: grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start).
    */
    gridColumnStart: {
      
  /**
   
   
   * ```css
   * .grid-column-start-AUTO {
   *   grid-column-start: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_1 {
   *   grid-column-start: span 1;
   * }
   * ```
   */
  readonly SPAN_1: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_2 {
   *   grid-column-start: span 2;
   * }
   * ```
   */
  readonly SPAN_2: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_3 {
   *   grid-column-start: span 3;
   * }
   * ```
   */
  readonly SPAN_3: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_4 {
   *   grid-column-start: span 4;
   * }
   * ```
   */
  readonly SPAN_4: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_5 {
   *   grid-column-start: span 5;
   * }
   * ```
   */
  readonly SPAN_5: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_6 {
   *   grid-column-start: span 6;
   * }
   * ```
   */
  readonly SPAN_6: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_7 {
   *   grid-column-start: span 7;
   * }
   * ```
   */
  readonly SPAN_7: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_8 {
   *   grid-column-start: span 8;
   * }
   * ```
   */
  readonly SPAN_8: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_9 {
   *   grid-column-start: span 9;
   * }
   * ```
   */
  readonly SPAN_9: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_10 {
   *   grid-column-start: span 10;
   * }
   * ```
   */
  readonly SPAN_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_11 {
   *   grid-column-start: span 11;
   * }
   * ```
   */
  readonly SPAN_11: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-start-SPAN_12 {
   *   grid-column-start: span 12;
   * }
   * ```
   */
  readonly SPAN_12: IDecorators;
  
    }
  

    
  /**
    * ### grid-column-end
The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
[Mozilla Developer Network: grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end).
    */
    gridColumnEnd: {
      
  /**
   
   
   * ```css
   * .grid-column-end-AUTO {
   *   grid-column-end: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_1 {
   *   grid-column-end: span 1;
   * }
   * ```
   */
  readonly SPAN_1: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_2 {
   *   grid-column-end: span 2;
   * }
   * ```
   */
  readonly SPAN_2: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_3 {
   *   grid-column-end: span 3;
   * }
   * ```
   */
  readonly SPAN_3: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_4 {
   *   grid-column-end: span 4;
   * }
   * ```
   */
  readonly SPAN_4: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_5 {
   *   grid-column-end: span 5;
   * }
   * ```
   */
  readonly SPAN_5: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_6 {
   *   grid-column-end: span 6;
   * }
   * ```
   */
  readonly SPAN_6: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_7 {
   *   grid-column-end: span 7;
   * }
   * ```
   */
  readonly SPAN_7: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_8 {
   *   grid-column-end: span 8;
   * }
   * ```
   */
  readonly SPAN_8: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_9 {
   *   grid-column-end: span 9;
   * }
   * ```
   */
  readonly SPAN_9: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_10 {
   *   grid-column-end: span 10;
   * }
   * ```
   */
  readonly SPAN_10: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_11 {
   *   grid-column-end: span 11;
   * }
   * ```
   */
  readonly SPAN_11: IDecorators;
  

  /**
   
   
   * ```css
   * .grid-column-end-SPAN_12 {
   *   grid-column-end: span 12;
   * }
   * ```
   */
  readonly SPAN_12: IDecorators;
  
    }
  

    
  /**
    * ### transform-origin
The transform-origin CSS property sets the origin for an element's transformations.
[Mozilla Developer Network: transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
    */
    transformOrigin: {
      
  /**
   
   
   * ```css
   * .transform-origin-CENTER {
   *   transform-origin: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-TOP {
   *   transform-origin: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-TOP_RIGHT {
   *   transform-origin: top right;
   * }
   * ```
   */
  readonly TOP_RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-RIGHT {
   *   transform-origin: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-BOTTOM_RIGHT {
   *   transform-origin: bottom right;
   * }
   * ```
   */
  readonly BOTTOM_RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-BOTTOM {
   *   transform-origin: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-BOTTOM_LEFT {
   *   transform-origin: bottom left;
   * }
   * ```
   */
  readonly BOTTOM_LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-LEFT {
   *   transform-origin: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-TOP_LEFT {
   *   transform-origin: top left;
   * }
   * ```
   */
  readonly TOP_LEFT: IDecorators;
  
    }
  

    
  /**
    * ### transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[Mozilla Developer Network: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
    */
    scale: {
      
  /**
   
   
   * ```css
   * .scale-NONE {
   *   transform:scale(0);
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_50 {
   *   transform:scale(.5);
   * }
   * ```
   */
  readonly SCALE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_75 {
   *   transform:scale(.75);
   * }
   * ```
   */
  readonly SCALE_75: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_90 {
   *   transform:scale(.9);
   * }
   * ```
   */
  readonly SCALE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_95 {
   *   transform:scale(.95);
   * }
   * ```
   */
  readonly SCALE_95: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_100 {
   *   transform:scale(1);
   * }
   * ```
   */
  readonly SCALE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_105 {
   *   transform:scale(1.05);
   * }
   * ```
   */
  readonly SCALE_105: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_110 {
   *   transform:scale(1.1);
   * }
   * ```
   */
  readonly SCALE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_125 {
   *   transform:scale(1.25);
   * }
   * ```
   */
  readonly SCALE_125: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_150 {
   *   transform:scale(1.5);
   * }
   * ```
   */
  readonly SCALE_150: IDecorators;
  
    }
  

    
  /**
    * ### transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[Mozilla Developer Network: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
    */
    rotate: {
      
  /**
   
   
   * ```css
   * .rotate-NEGATIVE_DEG_180 {
   *   transform:rotate(-180deg);
   * }
   * ```
   */
  readonly NEGATIVE_DEG_180: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-NEGATIVE_DEG_90 {
   *   transform:rotate(-90deg);
   * }
   * ```
   */
  readonly NEGATIVE_DEG_90: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-NEGATIVE_DEG_45 {
   *   transform:rotate(-45deg);
   * }
   * ```
   */
  readonly NEGATIVE_DEG_45: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-NONE {
   *   transform:rotate(0);
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-DEG_45 {
   *   transform:rotate(45deg);
   * }
   * ```
   */
  readonly DEG_45: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-DEG_90 {
   *   transform:rotate(90deg);
   * }
   * ```
   */
  readonly DEG_90: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-DEG_180 {
   *   transform:rotate(180deg);
   * }
   * ```
   */
  readonly DEG_180: IDecorators;
  
    }
  

    
  /**
    * ### transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[Mozilla Developer Network: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
    */
    translate: {
      
  /**
   
   
   * ```css
   * .translate-SPACE_PX {
   *   transform:translate(1px);
   * }
   * ```
   */
  readonly SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_0 {
   *   transform:translate(0);
   * }
   * ```
   */
  readonly SPACE_0: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_10 {
   *   transform:translate(0.25rem);
   * }
   * ```
   */
  readonly SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_20 {
   *   transform:translate(0.5rem);
   * }
   * ```
   */
  readonly SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_30 {
   *   transform:translate(0.75rem);
   * }
   * ```
   */
  readonly SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_40 {
   *   transform:translate(1rem);
   * }
   * ```
   */
  readonly SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_50 {
   *   transform:translate(1.25rem);
   * }
   * ```
   */
  readonly SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_60 {
   *   transform:translate(1.5rem);
   * }
   * ```
   */
  readonly SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_70 {
   *   transform:translate(2rem);
   * }
   * ```
   */
  readonly SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_80 {
   *   transform:translate(2.5rem);
   * }
   * ```
   */
  readonly SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_90 {
   *   transform:translate(3rem);
   * }
   * ```
   */
  readonly SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_100 {
   *   transform:translate(4rem);
   * }
   * ```
   */
  readonly SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_110 {
   *   transform:translate(5rem);
   * }
   * ```
   */
  readonly SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_120 {
   *   transform:translate(6rem);
   * }
   * ```
   */
  readonly SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_130 {
   *   transform:translate(8rem);
   * }
   * ```
   */
  readonly SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_140 {
   *   transform:translate(10rem);
   * }
   * ```
   */
  readonly SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_150 {
   *   transform:translate(12rem);
   * }
   * ```
   */
  readonly SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_160 {
   *   transform:translate(14rem);
   * }
   * ```
   */
  readonly SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-SPACE_170 {
   *   transform:translate(16rem);
   * }
   * ```
   */
  readonly SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_PX {
   *   transform:translate(-1px);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_PX: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_10 {
   *   transform:translate(-0.25rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_10: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_20 {
   *   transform:translate(-0.5rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_20: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_30 {
   *   transform:translate(-0.75rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_30: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_40 {
   *   transform:translate(-1rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_40: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_50 {
   *   transform:translate(-1.25rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_60 {
   *   transform:translate(-1.5rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_60: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_70 {
   *   transform:translate(-2rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_70: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_80 {
   *   transform:translate(-2.5rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_80: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_90 {
   *   transform:translate(-3rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_100 {
   *   transform:translate(-4rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_110 {
   *   transform:translate(-5rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_120 {
   *   transform:translate(-6rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_120: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_130 {
   *   transform:translate(-8rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_130: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_140 {
   *   transform:translate(-10rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_140: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_150 {
   *   transform:translate(-12rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_150: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_160 {
   *   transform:translate(-14rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_160: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_170 {
   *   transform:translate(-16rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_170: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEG_FULL {
   *   transform:translate(-100%);
   * }
   * ```
   */
  readonly NEG_FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEG_HALF {
   *   transform:translate(-50%);
   * }
   * ```
   */
  readonly NEG_HALF: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-HALF {
   *   transform:translate(50%);
   * }
   * ```
   */
  readonly HALF: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-FULL {
   *   transform:translate(100%);
   * }
   * ```
   */
  readonly FULL: IDecorators;
  
    }
  

    
  /**
    * ### transition-property
The transition-property CSS property sets the CSS properties to which a transition effect should be applied.
[Mozilla Developer Network: transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property).
    */
    transitionProperty: {
      
  /**
   
   
   * ```css
   * .transition-property-NONE {
   *   transition-property: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-ALL {
   *   transition-property: all;
   * }
   * ```
   */
  readonly ALL: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-DEFAULT {
   *   transition-property: background-color, border-color, color, opacity, transform;
   * }
   * ```
   */
  readonly DEFAULT: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-COLORS {
   *   transition-property: background-color, border-color, color;
   * }
   * ```
   */
  readonly COLORS: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-OPACITY {
   *   transition-property: opacity;
   * }
   * ```
   */
  readonly OPACITY: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-TRANSFORM {
   *   transition-property: transform;
   * }
   * ```
   */
  readonly TRANSFORM: IDecorators;
  
    }
  

    
  /**
    * ### transition-timing-function
The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
[Mozilla Developer Network: transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).
    */
    transitionTimingFunction: {
      
  /**
   
   
   * ```css
   * .transition-timing-function-LINEAR {
   *   transition-timing-function: linear;
   * }
   * ```
   */
  readonly LINEAR: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-timing-function-IN {
   *   transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
   * }
   * ```
   */
  readonly IN: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-timing-function-OUT {
   *   transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
   * }
   * ```
   */
  readonly OUT: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-timing-function-IN_OUT {
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   * }
   * ```
   */
  readonly IN_OUT: IDecorators;
  
    }
  

    
  /**
    * ### transition-duration
The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.
[Mozilla Developer Network: transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration).
    */
    transitionDuration: {
      
  /**
   
   
   * ```css
   * .transition-duration-DURATION_10 {
   *   transition-duration: 75ms;
   * }
   * ```
   */
  readonly DURATION_10: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_20 {
   *   transition-duration: 100ms;
   * }
   * ```
   */
  readonly DURATION_20: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_30 {
   *   transition-duration: 150ms;
   * }
   * ```
   */
  readonly DURATION_30: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_40 {
   *   transition-duration: 200ms;
   * }
   * ```
   */
  readonly DURATION_40: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_50 {
   *   transition-duration: 300ms;
   * }
   * ```
   */
  readonly DURATION_50: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_60 {
   *   transition-duration: 500ms;
   * }
   * ```
   */
  readonly DURATION_60: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_70 {
   *   transition-duration: 700ms;
   * }
   * ```
   */
  readonly DURATION_70: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-duration-DURATION_80 {
   *   transition-duration: 1000ms;
   * }
   * ```
   */
  readonly DURATION_80: IDecorators;
  
    }
  

    
  /**
    * ### utils (Classy-UI)
A set of utility tokens, you're welcome :-)
null
    */
    utils: {
      
  /**
   
   
   * ```css
   * .utils-CLEARFIX::after{
   *   content: "";
   *   display: table;
   *   clear: both;
   * }
   * ```
   */
  readonly CLEARFIX: IDecorators;
  

  /**
   
   
   * ```css
   * .utils-SCREEN_READER{
   *   position:absolute;
   *   width:1px;
   *   height:1px;
   *   padding:0;
   *   margin:-1px;
   *   overflow:hidden;
   *   clip:rect(0,0,0,0);
   *   white-space:nowrap;
   *   border-width:0;
   * }
   * ```
   */
  readonly SCREEN_READER: IDecorators;
  

  /**
   
   
   * ```css
   * .utils-NOT_SCREEN_READER{
   *   position:static;
   *   width:auto;
   *   height:auto;
   *   padding:0;
   *   margin:0;
   *   overflow:visible;
   *   clip:auto;
   *   white-space:normal;
   * }
   * ```
   */
  readonly NOT_SCREEN_READER: IDecorators;
  
    }
  
  }

  export const themes: {
    
  };
  export const group: TGroup;
  export const compose: TCompose;
  export const tokens: TTokens;

  
    /**
     * ```css
     * \@media (max-width: 640px) {
      $token
}
     * ```
     */
    export const mobile: TCompose;
  

    /**
     * ```css
     * \@media (max-width: 768px) {
      $token
}
     * ```
     */
    export const tablet: TCompose;
  

    /**
     * ```css
     * \@media (max-width: 1024px) {
      $token
}
     * ```
     */
    export const laptop: TCompose;
  

    /**
     * ```css
     * \@media (max-width: 1280px) {
      $token
}
     * ```
     */
    export const desktop: TCompose;
  

}
declare module 'classy-ui/macro' {
  export * from 'classy-ui'
}
