import { OmitType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends OmitType(CreateCartDto, ['userId'] as const) {}
