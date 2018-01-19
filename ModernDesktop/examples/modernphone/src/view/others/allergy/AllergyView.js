Ext.define('ModernDesktop.view.allergy.AllergyView',{
	extend: 'Ext.panel.Panel',
	xtype: 'allergyview',
	controller: 'allergyviewcontroller',
	viewModel: {
		type: 'allergyviewmodel'
	},	
	requires: [
		'Ext.dataview.listswiper.ListSwiper',
		'Ext.dataview.plugin.ListPaging'
	],
	layout: 'fit',
	tbar: [
		'->',
		{ xtype: 'button', xui: 'plain',iconCls: 'x-fa fa-sort-amount-asc', iconAlign: 'right', tag: 'ASC', text: 'Sort', handler: 'onSort'},
	],
	items: [
		{
			xtype: 'list',
			bind: '{allergies}',
			emptyText: 'No allergy was found',
			striped: true,
			grouped: true,
			ui: 'listing',
			selectable: {
					disabled: true
			},
			plugins: [
				{
					type: 'listpaging',
					autoPaging: true
				}, 
				{
					type: 'listswiper',
					right: [{
							iconCls: 'x-fa fa-trash',
							commit: 'onDeleteAction',
							undoable: true,
							text: 'Delete',
							ui: 'remove'
					}]
				}
			],
			itemTpl: new Ext.XTemplate(`
			<div class="testview" style="width: 100%;border: 0px solid green;">
				<table style="width: 100%;border: 0px solid green;" >

					<tr>
						<td width="50%" style="font-size: 14px;">
							<div style="line-height: 20px;" class="xitem-title">eHR #: <span style="color: green;font-weight: bold;">{eHRNumber}</span></div>
						</td>
						<td width="50%">
							<span class="apptdate"><span style="color: blue;font-weight: bold;">created: </span>{CreateDtm:date("Y/m/d")}</span>
							<span class="appttime">{CreateDtm:date("H:i")}</span>
						</td>
					</tr>

					<tr>
						<td colspan=2 width="100%"  style="font-size: 14px;">
							<div style="line-height: 20px;" class="xitem-title">Name: {AllergenName}</div>
							<div style="line-height: 20px;" class="xitem-caption">Hospital: {CreateByHospital}</div>
							<div style="line-height: 20px;" class="xitem-caption">Level Of Certainty: {LevelOfCertainty}</div>
						</td>
					</tr>

					<tr>
						<td colspan=2 width="100%" style="font-size: 14px;">
							<span>Manifestation: <span style="color: red;font-weight: bold;">{Manifestation}</span></span>
						</td>
					</tr>
					<tr>
					<td colspan=2 width="100%" style="font-size: 14px;">
						<span>Remark: {AllergenRemark}</span>
					</td>
				</tr>

				</table>
			</div>
			`,
			{
				getFont:function(val){
					if (val.toLowerCase() == 'n' ) {
						return false
					}
					else {
						return true
					}
				}
			})
		}
	]
});
