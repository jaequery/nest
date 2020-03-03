import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class FindAllDto {

  @ApiProperty()    
  @IsOptional()
  search?: string;

  @ApiProperty()  
  @IsOptional()
  offset?: number;

  @ApiProperty()  
  @IsOptional()
  limit?: number;

  @ApiProperty()  
  @IsOptional()
  orderDir?: string;

  @ApiProperty()  
  @IsOptional()
  orderBy?: string;

}
