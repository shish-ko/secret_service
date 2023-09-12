import c1 from '@assets/images/animation_chips/Center1.png';
import c2 from '@assets/images/animation_chips/Center2.png';
import c3 from '@assets/images/animation_chips/Center3.png';
import c4 from '@assets/images/animation_chips/Center4.png';
import l1 from '@assets/images/animation_chips/Left1.png';
import l2 from '@assets/images/animation_chips/Left2.png';
import l3 from '@assets/images/animation_chips/Left3.png';
import l4 from '@assets/images/animation_chips/Left4.png';

export const chips ={
  left: new Array(3).fill([l1, l2, l3, l4]).flat(),
  center: new Array(3).fill([c1, c2, c3, c4]).flat(),
  right: new Array(3).fill([l4, l2, l3, l1]).flat(),
}