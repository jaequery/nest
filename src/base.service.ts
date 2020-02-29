import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BaseService{

  private repository;

  constructor(repository){
    this.repository = repository;
  }

  wtf() {
    return "wtf";
  }
  
  async findAll(opts?: object) {
    return this.repository.find(opts);
  }

  async findById(id: number){
    return this.repository.findOne(id);
  }
}