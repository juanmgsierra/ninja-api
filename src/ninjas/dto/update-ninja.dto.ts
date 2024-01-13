import { CreateNinjaDto } from "./create-ninja.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}