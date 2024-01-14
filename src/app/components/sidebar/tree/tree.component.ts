import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface BoardNode {
  name: string;
  link: string;
  children?: BoardNode[];
}

const TREE_DATA: BoardNode[] = [
  {
    name: 'Quadro 1',
    link: 'boards/1',
    children: [
      { name: 'Ver quadro', link: '/boards/1' },
      { name: 'Adicionar nota', link: '/register' },
    ],
  },
  {
    name: 'Quadro 2',
    link: 'boards/2',
    children: [
      { name: 'Ver quadro', link: '/boards/2' },
      { name: 'Adicionar nota', link: '/register' },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  link: string;
}

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, MatTreeModule, MatIconModule, RouterModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent {
  private _transformer = (node: BoardNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      link: node.link,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
    console.log(this.treeFlattener);
    console.log(this.treeControl);
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
