import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { NodeService } from '../../service/node.service';

@Component({
  standalone: true,
  selector: 'app-tree',
  imports: [Tree],
  template: `
    <div class="card">
    <p-tree [value]="nodes" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" />
</div>

  `,
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  @Input() value: TreeNode[] = [];
  @Input() selectionMode!: string;
  @Input() collapsedIcon!: string;
  @Input() expandedIcon!: string;
  @Input() fileIcon!: string;

  @Output()
  onClick = new EventEmitter<Event>();

  @Input() files: TreeNode[] = [];

  @Input() cols: any[] = [];
  selectedFile!: TreeNode;
  nodes = [
    {
      label: 'Root',
      expanded: true,
      children: [
        {
          label: 'Child 1',
          children: [
            { label: 'Subchild 1.1' },
            { label: 'Subchild 1.2' },
          ],
        },
        {
          label: 'Child 2',
          children: [
            { label: 'Subchild 2.1' },
            { label: 'Subchild 2.2' },
          ],
        },
      ],
    },
  ];


}
