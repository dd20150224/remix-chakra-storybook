import type React from 'react';
import InputText from './inputText';
import InputPassword from './inputPassword';

import InputAutoNumbering from './inputAutoNumbering';
import InputDate from './inputDate';
import InputAttachments from './inputAttachments';

interface IComponentMapping {
  [key: string]: React.FC<any>;
}
export const components: IComponentMapping = {
  'text': InputText,
  'password': InputPassword,
  'attachments': InputAttachments,
  'autoNumbering': InputAutoNumbering,
  'date': InputDate,
}
