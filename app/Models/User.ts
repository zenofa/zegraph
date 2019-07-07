import {Entity, Column, BaseEntity, Timestamp, PrimaryGeneratedColumn} from "typeorm";
@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type:"varchar",length:200,unique:true})
    full_name: string
    @Column({type:"varchar",length:100,unique:true})
    email: string;
    @Column({type:"varchar",length:100})
    password: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Timestamp;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',onUpdate:"CURRENT_TIMESTAMP"})
    updated_at: Timestamp;
}