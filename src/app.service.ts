import { Inject, Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Repository, UpdateResult, Like } from 'typeorm';

import { FindAllDto } from './app.dtos';

import { Util } from './util';
const util = new Util;

@Injectable()
export class AppService {

  protected repository;

  constructor(repository) {
    this.repository = repository;
  }

  async destroy(id: number) {
    return await this.repository.delete(id);
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);    
  }

  async findAll(query: FindAllDto) {

    console.log('query', query);

    const limit = query.limit || 10;
    const offset = query.offset || 0;
    const search = query.search || '';
    const orderDir = query.orderDir || 'DESC';
    const orderBy = query.orderBy || 'id';
    
    const [result, total] = await this.repository.findAndCount(
      {
        where: search ? { name: Like('%' + search + '%') } : null, 
        order: { name: "DESC" },
        take: limit,
        skip: offset
      }
    );

    return {
      items: result,
      count: total
    };
  }

}